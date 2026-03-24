import { useCvStore } from "../store/CvStore"

export const EducationDetailsPreview = () => {
  const education = useCvStore(state => state.education)
  return education.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Education</h2>
      {education
        .filter(education => (education.university ?? "").toString().trim() !== "")
        .map(education => (
          <div className="preview-section__content" key={education.id}>
            <strong className="preview-section__name">{education.university}</strong>
            <div className="preview-section__sub-header">
              {education.period && <span className="preview-section__duration">{education.period}</span>}
              {education.degree && <span>{education.degree}</span>}
            </div>
            {education.descriptions.length > 0
              ? (<ul>
                {education.descriptions.map(description => (
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
