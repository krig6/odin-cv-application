import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrashAlt, Apps } from "@boxicons/react";
import { IconButton } from "./Buttons";
import { InputField } from "./InputField";
import styles from "./SortableEntryField.module.css"
import { SortableProvider } from "./SortableDndProvider";

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

export const SortableSection = ({ sections, onReorder }) =>
(
  <SortableProvider
    items={sections}
    onReorder={onReorder}
  >
    {
      sections.map((section) => {
        const Component = section.entryComponent

        return (
          <SortableItem key={section.id} id={section.id}>
            <Component
              {...(section.config && { config: section.config })}
            />
          </SortableItem>
        )
      })
    }
  </SortableProvider>
)

export const SortableEntry = ({ items, onReorder, update, del, label, children, isMinimal = false }) => {

  const getItemName = (item) => {
    if ("text" in item) return item.text
    if ("name" in item) return item.name
    if ("company" in item) return item.company ?? ""
    if ("university" in item) return item.university ?? ""
    if ("category" in item) return item.category ?? ""
    return ""
  }

  return (
    <SortableProvider
      items={items}
      onReorder={onReorder}
    >
      <ul className={styles.list}>
        {items.map(item => (
          <SortableItem key={item.id} as="li" id={item.id}>
            <SortableEntryField
              itemId={item.id}
              itemName={getItemName(item)}
              update={(value) => update(item.id, value)}
              del={() => del(item.id)}
              label={label}
              isMinimal={isMinimal}
            >
              {children ? children(item) : null}
            </SortableEntryField>
          </SortableItem>
        ))}
      </ul>
    </SortableProvider>
  );
};

const SortableEntryField = ({ itemId, itemName, update, del, label, children, dragHandleProps, isMinimal }) => {
  return (
    <div className={`${styles.main} ${isMinimal ? styles.mainMinimal : ""}`}>
      <div className={`${styles.header} ${isMinimal ? styles.headerMinimal : ""}`}>
        <IconButton
          {...dragHandleProps}
          icon={
            <Apps
              size={`${isMinimal ? "xs" : "base"}`}
            />
          }
        />

        <InputField
          key={itemId}
          id={`sortable-item-${itemId}`}
          value={itemName}
          label={label}
          onChange={update}
        />

        <IconButton
          icon={
            <TrashAlt
              size={`${isMinimal ? "xs" : "base"}`}
            />
          }
          onClick={del}
        />
      </div>
      {children}
    </div>
  );
};
