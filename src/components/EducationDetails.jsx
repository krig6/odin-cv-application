import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore";
import { SortableItems } from "./SortableSections";

export const EducationDetails = ({ dragHandleProps }) => {
  const educations = useCvStore(state => state.educations)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const deleteDescription = useCvStore(state => state.deleteDescription)
  const reorderItems = useCvStore(state => state.reorderItems);
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions);

  return (
    <div className="education">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={educations}
          onReorder={(newArray) => reorderItems("educations", newArray)}
          update={(itemId, value) => setItem("educations", itemId, { name: value })}
          del={(itemId) => deleteItem("educations", itemId)}
          label="University"
        >
          {(education) => (
            <>
              <div className="educations__period">
                <label className="educations__label" htmlFor={`period-${education.id}`}>Period</label>
                <input
                  id={`period-${education.id}`}
                  className="educations__input"
                  value={education.period}
                  onChange={(e) => setItem("educations", education.id, { period: e.target.value })}
                />
              </div>
              <div className="educations__position">
                <label className="educations__label" htmlFor={`position-${education.id}`}>Degree</label>
                <input
                  id={`position-${education.id}`}
                  className="educations__input"
                  value={education.degree}
                  onChange={(e) => setItem("educations", education.id, { degree: e.target.value })}
                />
              </div>

              <SortableItems
                items={education.descriptions}
                onReorder={(newDesc) => reorderDescriptions("educations", education.id, newDesc)}
                update={(descId, value) => setDescription("educations", education.id, descId, value)}
                del={(descId) => deleteDescription("educations", education.id, descId)}
                label="Description"
              />

              <button className="educations__button educations__button--add-description" type="button" onClick={() => addDescription("educations", education.id)}>+ Add Description</button>

            </>
          )}
        </SortableItems>
        <button className="educations__button educations__button--add-education" type="button" onClick={() => addItem("educations")}>+ Add Education</button>
      </CollapsibleSection >
    </div >
  )
}
