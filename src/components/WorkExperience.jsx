import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore"
import { SortableItems } from "./SortableSections";
import { InputField } from "./Shared/InputField";
import { AddButton } from "./Shared/Buttons";

export const WorkExperience = ({ dragHandleProps }) => {
  const work = useCvStore(state => state.work)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <div className="work">
      <CollapsibleSection title="Professional Experience" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={work}
          onReorder={(newArray) => reorderItems("work", newArray)}
          update={(itemId, val) => setItem("work", itemId, { name: val })}
          del={(itemId) => deleteItem("work", itemId)}
          label="Company"
        >
          {work => (
            <WorkItems
              work={work}
              setItem={setItem}
            />
          )}
        </SortableItems >

        <AddButton onClick={() => addItem("work")}>
          Add work
        </AddButton>

      </CollapsibleSection >
    </div >
  )
}

const WorkItems = ({ work, setItem }) => {
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const deleteDescription = useCvStore(state => state.deleteDescription)

  return (
    <>
      <InputField
        id={`period=${work.id}`}
        value={work.period}
        label="Period"
        onChange={(value) => setItem("work", work.id, { period: value })}
      />

      <InputField
        id={`position=${work.id}`}
        value={work.position}
        label="Position"
        onChange={(value) => setItem("work", work.id, { position: value })}
      />

      <SortableItems
        items={work.descriptions}
        onReorder={(newDesc) => reorderDescriptions("work", work.id, newDesc)}
        update={(descId, value) => setDescription("work", work.id, descId, value)}
        del={(descId) => deleteDescription("work", work.id, descId)}
        label="Description"
      />

      <AddButton onClick={() => addDescription("work", work.id)}>
        Add work Description
      </AddButton>
    </>
  )
}
