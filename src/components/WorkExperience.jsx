import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore"
import { SortableItems } from "./SortableSections";

export const WorkExperience = ({ dragHandleProps }) => {
  const employments = useCvStore(state => state.employments)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

  return (
    <div className="employments">
      <CollapsibleSection title="Professional Experience" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={employments}
          onReorder={(newArray) => reorderItems("employments", newArray)}
          update={(itemId, val) => setItem("employments", itemId, { name: val })}
          del={(itemId) => deleteItem("employments", itemId)}
          label="Company"
        >
          {employment => (
            <WorkItems
              employment={employment}
              setItem={setItem}
            />
          )}
        </SortableItems >
        <button className="employments__button employments__button--add-employment" type="button" onClick={() => addItem("employments")}>+ Add Employment</button>
      </CollapsibleSection >
    </div >
  )
}

const WorkItems = ({ employment, setItem }) => {
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const deleteDescription = useCvStore(state => state.deleteDescription)

  return (
    <>
      <InputField
        id={`period=${employment.id}`}
        value={employment.period}
        label="Period"
        onChange={(e) => setItem("employments", employment.id, { period: e.target.value })}
      />

      <InputField
        id={`position=${employment.id}`}
        value={employment.position}
        label="Position"
        onChange={(e) => setItem("employments", employment.id, { position: e.target.value })}
      />

      <SortableItems
        items={employment.descriptions}
        onReorder={(newDesc) => reorderDescriptions("employments", employment.id, newDesc)}
        update={(descId, value) => setDescription("employments", employment.id, descId, value)}
        del={(descId) => deleteDescription("employments", employment.id, descId)}
        label="Description"
      />

      <button className="employments__button employments__button--add-description" type="button" onClick={() => addDescription("employments", employment.id)}>+ Add Description</button>
    </>
  )
}
