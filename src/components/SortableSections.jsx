import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrashAlt, Move } from "@boxicons/react";
import { IconButton } from "./Shared/Buttons";

export const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {React.cloneElement(children, { dragHandleProps: { ...attributes, ...listeners } })}
    </div>
  );
};

export const SortableSections = ({ components }) => {
  const [items, setItems] = useState(components);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id}>
            {item.component}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export const SortableItems = ({ items, itemName = (item) => item.text ?? item.name ?? "", onReorder, update, del, label, children }) => {
  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(i => i.id === active.id);
    const newIndex = items.findIndex(i => i.id === over.id);

    onReorder(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        {items.map(item => (
          <SortableItem key={item.id} id={item.id}>
            <ItemField
              itemId={item.id}
              itemName={itemName(item)}
              update={(value) => update(item.id, value)}
              del={() => del(item.id)}
              label={label}
            >
              {children ? children(item) : null}
            </ItemField>
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

const ItemField = ({ itemId, itemName, update, del, label, children, dragHandleProps }) => {
  return (
    <div className="sortable-item-field">
      <IconButton {...dragHandleProps} icon={<Move />} />

      <div className="sortable-item">
        <label htmlFor={`sortable-item-${itemId}`}>{label}</label>
        <input
          id={`sortable-item-${itemId}`}
          value={itemName}
          onChange={(e) => update(e.target.value)}
        />
        <IconButton icon={<TrashAlt />} onClick={del} />
        {children}
      </div>
    </div>
  );
};
