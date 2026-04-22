import { useCvStore } from "../../store/cvStore"
import { CollapsibleSection } from "../../shared/ui/CollapsibleSection"
import { InputField } from "../../shared/ui/InputField"
import { SortableEntry } from "../../shared/dnd/SortableSection"
import { AddButton } from "../../shared/ui/Buttons"
import styles from "../../shared/ui/EditorSection.module.css"

export const EntrySection = ({ dragHandleProps, config }) => {
  const items = useCvStore(state => state[config.storeKey])
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const setDescription = useCvStore(state => state.setDescription)
  const deleteDescription = useCvStore(state => state.deleteDescription)
  const addDescription = useCvStore(state => state.addDescription)

  return (
    <CollapsibleSection title={config.title} dragHandleProps={dragHandleProps}>
      <SortableEntry
        items={items}
        onReorder={(newArray) => reorderItems(config.storeKey, newArray)}
        update={(itemId, val) => setItem(config.storeKey, itemId, { [config.primary]: val })}
        del={(itemId) => deleteItem(config.storeKey, itemId)}
        label={config.label}
      >
        {item => (
          <article key={item.id} className={styles.article}>
            <div className={styles.fields}>
              {config.fields.map(field => (
                <InputField
                  key={`${field.key}-${item.id}`}
                  id={`${field.key}-${item.id}`}
                  value={item[field.key] ?? ""}
                  label={field.label}
                  onChange={(value) =>
                    setItem(config.storeKey, item.id, { [field.key]: value })
                  }
                />
              ))}
            </div>
            <SortableEntry
              items={item.descriptions ?? []}
              onReorder={(newDesc) => reorderDescriptions(config.storeKey, item.id, newDesc)}
              update={(descId, value) => setDescription(config.storeKey, item.id, descId, value)}
              del={(descId) => deleteDescription(config.storeKey, item.id, descId)}
              label="Description"
              isMinimal
            />

            <AddButton onClick={() => addDescription(config.storeKey, item.id)}>
              Description
            </AddButton>
          </article>
        )
        }
      </SortableEntry>
      <AddButton onClick={() => addItem(config.storeKey)}>
        {config.title}
      </AddButton>
    </CollapsibleSection>
  )
}
