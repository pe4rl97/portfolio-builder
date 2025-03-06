import { useState } from "react";
import { SectionsData, SectionType } from "../types";
import { Droppable } from "./Droppable";
import DOMPurify from 'dompurify';

interface CanvasProps {
  sections: SectionsData;
}

export const Canvas = ({ sections }: CanvasProps) => {
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
              }`}
            >
              {component ? (
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(component.component) }} />
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
