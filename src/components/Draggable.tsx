import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

interface DraggableProps {
  id: string;
  children: ReactNode;
}

export const Draggable = ({ id, children }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: { type: "component" },
  });

  const style = {
    transform: transform
      ? `${CSS.Translate.toString(transform)} translate(0%, 0%)` // Snap to cursor center
      : undefined,
    zIndex: isDragging ? 50 : "auto", // Ensure it's above everything while dragging
    pointerEvents: isDragging ? "fill" : "auto", // Fix issue where dragging element blocks mouse events
    position: isDragging ? "absolute" : "relative", // Ensure correct positioning
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-move select-none"
      role="button"
      aria-describedby={`draggable-${id}`}
    >
      {children}
    </div>
  );
};
