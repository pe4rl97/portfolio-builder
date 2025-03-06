  import { useState, useEffect, useRef } from "react";
  import { SectionsData, SectionType } from "../types";
  import { Droppable } from "./Droppable";
  import DOMPurify from "dompurify";

  interface CanvasProps {
    sections: SectionsData;
    setSections: React.Dispatch<React.SetStateAction<SectionsData>>;
    isPreview: boolean;
  }

  const EditableComponent = ({
    html,
    isPreview,
  }: {
    html: string;
    isPreview: boolean;
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!ref.current) return;

      const textElements = ref.current.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, a, li, td, th, div"
      );
      const formElements = ref.current.querySelectorAll(
        "button, input, textarea, select, form"
      );

      if (!isPreview) {
        // Make text elements editable
        textElements.forEach((el) => el.setAttribute("contenteditable", "true"));

        // Completely disable form elements and prevent interaction
        formElements.forEach((el) => {
          el.setAttribute("disabled", "true");
          el.setAttribute("style", "pointer-events: none;"); // Visually disable
        });
      } else {
        // Remove contenteditable from text elements
        textElements.forEach((el) => el.removeAttribute("contenteditable"));

        // Re-enable form elements for interaction
        formElements.forEach((el) => {
          el.removeAttribute("disabled");
          el.removeAttribute("style");
        });
      }
    }, [isPreview, html]);

    return (
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html, { ADD_ATTR: ["contenteditable"] }),
        }}
      />
    );
  };


  export const Canvas = ({ sections, setSections, isPreview }: CanvasProps) => {
    const [activeDrop, setActiveDrop] = useState<string | null>(null);

    return (
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(sections).map(([sectionType, component]) => (
            <Droppable
              key={sectionType}
              id={sectionType as SectionType}
              onDragEnter={() => setActiveDrop(sectionType)}
              onDragLeave={() => setActiveDrop(null)}
            >
              <div
                className={`min-h-[100px] ${
                  activeDrop === sectionType ? "bg-blue-100 border-blue-400" : ""
                } ${isPreview ? "pointer-events-none opacity-90" : ""}`}
              >
                {component ? (
                  <EditableComponent
                    html={component.component}
                    isPreview={isPreview}
                  />
                ) : (
                  <p className="text-gray-400 text-center capitalize">
                    Drag {sectionType} here
                  </p>
                )}
              </div>
            </Droppable>
          ))}
        </div>
      </div>
    );
  };