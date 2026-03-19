import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore"
import { SortableItems } from "./SortableSections";

export const WorkExperience = ({ dragHandleProps }) => {
  const employments = useCvStore(state => state.employments)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const deleteDescription = useCvStore(state => state.deleteDescription)
  const reorderItems = useCvStore(state => state.reorderItems);
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions);

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
          {(employment) => (
            <>
              <div className="employments__period">
                <label className="employments__label" htmlFor={`period-${employment.id}`}>Period</label>
                <input
                  id={`period-${employment.id}`}
                  className="employments__input"
                  value={employment.period}
                  onChange={(e) => setItem("employments", employment.id, { period: e.target.value })}
                />
              </div>

              <div className="employments__position">
                <label className="employments__label" htmlFor={`position-${employment.id}`}>Position</label>
                <input
                  id={`position-${employment.id}`}
                  className="employments__input"
                  value={employment.position}
                  onChange={(e) => setItem("employments", employment.id, { position: e.target.value })}
                />
              </div>

              <SortableItems
                items={employment.descriptions}
                onReorder={(newDesc) => reorderDescriptions("employments", employment.id, newDesc)}
                update={(descId, value) => setDescription("employments", employment.id, descId, value)}
                del={(descId) => deleteDescription("employments", employment.id, descId)}
                label="Description"
              />
              <button className="employments__button employments__button--add-description" type="button" onClick={() => addDescription("employments", employment.id)}>+ Add Description</button>
            </>
          )}
        </SortableItems >
        <button className="employments__button employments__button--add-employment" type="button" onClick={() => addItem("employments")}>+ Add Employment</button>
      </CollapsibleSection >
    </div >
  )
}
