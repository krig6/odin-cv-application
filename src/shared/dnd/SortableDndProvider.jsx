import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';

export const SortableProvider = ({ items, onReorder, children }) => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(item => item.id === active.id);
    const newIndex = items.findIndex(item => item.id === over.id);

    onReorder(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext >
  );
}
