// src/components/DraggableStory.tsx
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import React from "react";
import { MultipleComponentsData, SectionsData } from "../../types";
import { Canvas } from "../Canvas";
import { Sidebar } from "../Sidebar";
// import { Sidebar } from "./Sidebar";
// import { Canvas } from "./Canvas";
// import { MultipleComponentsData, SectionsData, SectionType } from "../types";

interface DraggableStoryProps {
  components: MultipleComponentsData;
  sections: SectionsData;
  previewHtml: string;
  handleDragEnd: (event: DragEndEvent) => void;
}

const DraggableStory: React.FC<DraggableStoryProps> = ({
  components,
  sections,
  previewHtml,
  handleDragEnd,
}) => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {!previewHtml && (
        <div className="flex">
          <Sidebar components={components} />
          <Canvas sections={sections} />
        </div>
      )}
    </DndContext>
  );
};

export default DraggableStory;
