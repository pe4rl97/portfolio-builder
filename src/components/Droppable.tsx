import { useDroppable } from '@dnd-kit/core';
import { SectionType } from '../types';
import { ReactNode } from 'react';

interface DroppableProps {
  id: SectionType;
  children: ReactNode;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
}

export const Droppable = ({ id, children, onDragEnter, onDragLeave }: DroppableProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: {
      accepts: id,
    },
  });

  return (
    <div
      ref={setNodeRef}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      className={`transition-colors duration-200 border-2 border-gray-300 border-dotted rounded-lg p-6 min-h-[100px] ${
        isOver ? 'bg-blue-100 border-blue-400' : 'bg-white'
      }`}
      aria-label={`${id} drop zone`}
      data-type={id}
    >
      {children}
    </div>
  );
};
