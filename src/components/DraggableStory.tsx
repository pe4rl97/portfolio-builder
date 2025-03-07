import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import React from "react";
import { MultipleComponentsData } from "../types";
import Canvas from "./Canvas";
import { Sidebar } from "./Sidebar";

interface DraggableStoryProps {
  components: MultipleComponentsData;
  handleDragEnd: (event: DragEndEvent) => void;
}

const DraggableStory: React.FC<DraggableStoryProps> = ({
  components,
  handleDragEnd,
}) => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      { (
        <div className="flex">
          <Sidebar components={components} />
          <Canvas/>
        </div>
      )}
    </DndContext>
  );
};

export default DraggableStory;
