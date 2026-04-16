import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrashAlt, Apps } from "@boxicons/react";
import { IconButton } from "./Buttons";
import { InputField } from "./InputField";
import styles from "./SortableItemField.module.css"
import { KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';

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
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex(section => section.id === active.id);
    const newIndex = sections.findIndex(section => section.id === over.id);

    onReorder(arrayMove(sections, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={sections.map(section => section.id)} strategy={verticalListSortingStrategy}>
        {sections.map((section) => {
          const Component = section.entryComponent

          return (
            <SortableItem key={section.id} id={section.id}>
              <Component
                {...(section.config && { config: section.config })}
              />
            </SortableItem>
          )
        })}
      </SortableContext>
    </DndContext >
  );
};

export const SortableList = ({ items, onReorder, update, del, label, children, isDescription = false }) => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

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
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <ul className={styles.list}>
          {items.map(item => (
            <SortableItem key={item.id} as="li" id={item.id}>
              <SortableItemField
                itemId={item.id}
                itemName={getItemName(item)}
                update={(value) => update(item.id, value)}
                del={() => del(item.id)}
                label={label}
                isDescription={isDescription}
              >
                {children ? children(item) : null}
              </SortableItemField>
            </SortableItem>
          ))}
        </ul>
      </SortableContext>
    </DndContext >
  );
};

const SortableItemField = ({ itemId, itemName, update, del, label, children, dragHandleProps, isDescription }) => {
  return (
    <div className={styles.main}>
      <div className={`${styles.header} ${isDescription ? styles.headerCompact : ""}`}>
        <IconButton {...dragHandleProps} icon={<Apps />} />

        <InputField
          key={itemId}
          id={`sortable-item-${itemId}`}
          value={itemName}
          label={label}
          onChange={update}
        />

        <IconButton icon={<TrashAlt />} onClick={del} />
      </div>
      {children}
    </div>
  );
};
