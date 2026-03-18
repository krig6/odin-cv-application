import { CollapsibleSection } from "./CollapsibleSection"
import { TrashAlt } from "@boxicons/react"
import { useEducation } from "../store/cvStore"

export const EducationDetails = ({ dragHandleProps }) => {
  const educations = useEducation(state => state.educations)
  const addEducation = useEducation(state => state.addEducation)
  const setEducation = useEducation(state => state.setEducation)
  const deleteEducation = useEducation(state => state.deleteEducation)
  const addDescription = useEducation(state => state.addDescription)
  const setDescription = useEducation(state => state.setDescription)
  const deleteDescription = useEducation(state => state.deleteDescription)

  return (
    <div className="education">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <div className="educations__list">
          {educations.map(education => (
            <div className="educations__item" key={education.id}>
              <div className="educations__header">
                <label className="educations__label" htmlFor={education.id}>University</label>
                <input
                  id={education.id}
                  className="educations__input"
                  value={education.name}
                  onChange={(e) => setEducation(education.id, { name: e.target.value })}
                />
                <button
                  className="educations__button educations__button--delete" type="button" onClick={() => deleteEducation(education.id)}
                >
                  <TrashAlt />
                </button>
              </div>
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
              <div className="educations__descriptions">
                {education.descriptions.map(description => (
                  <div className="educations__description" key={description.id}>
                    <input
                      id={`desc-${description.id}`}
                      className="educations__input"
                      value={description.text}
                      onChange={(e) => setDescription(education.id, description.id, { text: e.target.value })}
                    />
                    <button
                      className="educations__button educations__button--delete" type="button" onClick={() => deleteDescription(education.id, description.id)}
                    >
                      <TrashAlt />
                    </button>
                  </div>
                ))}
              </div>
              <button className="educations__button educations__button--add-description" type="button" onClick={() => addDescription(education.id)}>+ Add Description</button>
            </div>
          ))}
        </div>
        <button className="educations__button educations__button--add-education" type="button" onClick={addEducation}>+ Add Education</button>
      </CollapsibleSection >
    </div >
  )
}
