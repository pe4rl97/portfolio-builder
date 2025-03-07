import { useEffect, useState } from "react";
import { useSectionsContext } from "../context/SectionsProvider";
import { SectionType } from "../types";
import { Droppable } from "./Droppable";
import EditableComponent from "./EditableComponent";

export const Canvas = () => {
  const { sections, isPreview } = useSectionsContext();
  const [activeDrop, setActiveDrop] = useState<string | null>(null);

  useEffect(() => {
    if (isPreview) {
      console.log("In preview mode");
    } else {
      console.log("Editing mode");
    }
  }, [isPreview]);

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
                  component={component}
                  sectionType={sectionType as SectionType}
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

export default Canvas;
