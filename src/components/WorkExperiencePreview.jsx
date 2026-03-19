import { useCvStore } from "../store/CvStore"

export const WorkExperiencePreview = () => {
  const employments = useCvStore(state => state.employments)
  return employments.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Professional Experience</h2>
      {employments
        .filter(employment => (employment.name ?? "").toString().trim() !== "")
        .map(employment => (
          <div className="preview-section__content" key={employment.id}>
            <strong className="preview-section__name">{employment.name}</strong>
            <div className="preview-section__sub-header">
              {employment.period && <span className="preview-section__duration">{employment.period}</span>}
              {employment.position && <span>{employment.position}</span>}
            </div>
            {employment.descriptions.length > 0
              ? (<ul>
                {employment.descriptions.map(description => (
                  <li key={description.id}>{description.text}</li>
                ))}
              </ul>
              ) : null
            }
          </div>
        ))}
    </section >)
    : null
}
