import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrashAlt, Apps } from "@boxicons/react";
import { IconButton } from "./Shared/Buttons";

export const SortableItem = ({ id, children, as: Component = 'div' }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Component ref={setNodeRef} style={style}>
      {React.cloneElement(children, { dragHandleProps: { ...attributes, ...listeners } })}
    </Component>
  );
};

export const SortableSection = ({ sections, onReorder }) => {
  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex(section => section.id === active.id);
    const newIndex = sections.findIndex(section => section.id === over.id);

    onReorder(arrayMove(sections, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sections.map(section => section.id)} strategy={verticalListSortingStrategy}>
        {sections.map((section) => {
          const Component = section.component
          return (
            <SortableItem key={section.id} id={section.id} >
              <Component />
            </SortableItem>
          )
        })}
      </SortableContext>
    </DndContext >
  );
};

export const SortableList = ({ items, onReorder, update, del, label, className, children }) => {
  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(i => i.id === active.id);
    const newIndex = items.findIndex(i => i.id === over.id);

    onReorder(arrayMove(items, oldIndex, newIndex));
  };

  const getItemName = (item) => {
    if ("text" in item) return item.text
    if ("name" in item) return item.name
    if ("company" in item) return item.company ?? ""
    if ("university" in item) return item.university ?? ""
    if ("category" in item) return item.category ?? ""
    return ""
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <ul className="sortable-items">
          {items.map(item => (
            <SortableItem key={item.id} as="li" id={item.id}>
              <ItemField
                itemId={item.id}
                itemName={getItemName(item)}
                update={(value) => update(item.id, value)}
                del={() => del(item.id)}
                label={label}
                className={className}
              >
                {children ? children(item) : null}
              </ItemField>
            </SortableItem>
          ))}
        </ul>
      </SortableContext>
    </DndContext >
  );
};

const ItemField = ({ itemId, itemName, update, del, label, className, children, dragHandleProps }) => {
  return (
    <div className={`${className} sortable-item-field`}>
      <div className="sortable-item-field__header">

        <IconButton {...dragHandleProps} icon={<Apps />} />

        <div>
          <label className="input__label" htmlFor={`sortable-item-${itemId}`}>
            {label}
          </label>
          <input
            id={`sortable-item-${itemId}`}
            className="sortable-item-field__input"
            value={itemName}
            onChange={(e) => update(e.target.value)}
            placeholder=""
          />
        </div>
        <IconButton icon={<TrashAlt />} onClick={del} />
      </div>
      {children}
    </div>
  );
};
