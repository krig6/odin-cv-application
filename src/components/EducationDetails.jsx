import { CollapsibleSection } from "./CollapsibleSection"
import { useEducation } from "../store/cvStore"
import { SortableItems } from "./SortableSections";

export const EducationDetails = ({ dragHandleProps }) => {
  const educations = useEducation(state => state.educations)
  const addEducation = useEducation(state => state.addEducation)
  const setEducation = useEducation(state => state.setEducation)
  const deleteEducation = useEducation(state => state.deleteEducation)
  const addDescription = useEducation(state => state.addDescription)
  const setDescription = useEducation(state => state.setDescription)
  const deleteDescription = useEducation(state => state.deleteDescription)
  const reorderDescriptions = useEducation(state => state.reorderDescriptions);
  const reorderEducations = useEducation(state => state.reorderEducations);

  return (
    <div className="education">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <SortableItems
          items={educations}
          onReorder={reorderEducations}
          update={(id, val) => setEducation(id, { name: val })}
          del={deleteEducation}
          label="Education"
        >
          {(education) => (
            <>
              <div className="educations__period">
                <label className="educations__label" htmlFor={`period-${education.id}`}>Period</label>
                <input
                  id={`period-${education.id}`}
                  className="educations__input"
                  value={education.period}
                  onChange={(e) => setEducation(education.id, { period: e.target.value })}
                />
              </div>
              <div className="educations__position">
                <label className="educations__label" htmlFor={`position-${education.id}`}>Degree</label>
                <input
                  id={`position-${education.id}`}
                  className="educations__input"
                  value={education.degree}
                  onChange={(e) => setEducation(education.id, { degree: e.target.value })}
                />
              </div>

              <SortableItems
                items={education.descriptions}
                onReorder={(newDesc) => reorderDescriptions(education.id, newDesc)}
                update={(descId, value) => setDescription(education.id, descId, { text: value })}
                del={(descId) => deleteDescription(education.id, descId)}
                label="Description"
              />

              <button className="educations__button educations__button--add-description" type="button" onClick={() => addDescription(education.id)}>+ Add Description</button>

            </>
          )}
        </SortableItems>
        <button className="educations__button educations__button--add-education" type="button" onClick={addEducation}>+ Add Education</button>
      </CollapsibleSection >
    </div >
  )
}
