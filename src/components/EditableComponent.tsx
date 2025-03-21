  import DOMPurify from "dompurify";
import { useEffect, useRef } from "react";
import { useSectionsContext } from "../context/SectionsProvider";
import { ComponentData, SectionType } from "../types";

  const EditableComponent = ({
    component,
    sectionType,
  }: {
    component: ComponentData;
    sectionType: SectionType;
  }) => {
    const { isPreview, handleComponentUpdate } = useSectionsContext();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!ref.current) return;

      const textElements = ref.current.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, li, td, th, button, a"
      );
      const formElements = ref.current.querySelectorAll(
        "input, textarea, select, form"
      );
      const uninteractableElements = ref.current.querySelectorAll("button, a");

      const handleOnBlur = () => {
        if (ref.current) {
          handleComponentUpdate(sectionType, {
            ...component,
            component: ref.current.innerHTML,
          });
        }
      };

      if (!isPreview) {
        // Make text elements editable and attach event listeners
        textElements.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.setAttribute("contenteditable", "true");
          el.addEventListener("blur", handleOnBlur);
        });

        // Disable form elements
        formElements.forEach((el) => {
          el.setAttribute("disabled", "true");
          el.setAttribute("style", "pointer-events: none;");
        });

        uninteractableElements.forEach((el) => {
          el.setAttribute("style", "pointer-events: none;");
        });
      } else {
        // Remove contenteditable in preview mode
        textElements.forEach((el) => {
          el.removeAttribute("tabindex");
          el.removeAttribute("contenteditable");
          el.removeEventListener("blur", handleOnBlur); // Proper cleanup
        });

        // Enable form elements in preview mode
        formElements.forEach((el) => {
          el.removeAttribute("");
          el.removeAttribute("style");
        });

        uninteractableElements.forEach((el) => {
          el.removeAttribute("style");
        });
      }

      // Cleanup function to prevent memory leaks
      return () => {
        textElements.forEach((el) =>
          el.removeEventListener("blur", handleOnBlur)
        );
      };
    }, [isPreview, component, sectionType, handleComponentUpdate]);

    return (
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(component.component, {
            ADD_ATTR: isPreview ? [] : ["contenteditable"],
          }),
        }}
      />
    );
  };

  export default EditableComponent;