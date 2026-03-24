import { useCvStore } from "../store/CvStore"

export const WorkExperiencePreview = () => {
  const work = useCvStore(state => state.work)
  return work.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Professional Experience</h2>
      {work
        .filter(work => (work.company ?? "").toString().trim() !== "")
        .map(work => (
          <div className="preview-section__content" key={work.id}>
            <strong className="preview-section__name">{work.company}</strong>
            <div className="preview-section__sub-header">
              {work.period && <span className="preview-section__duration">{work.period}</span>}
              {work.position && <span>{work.position}</span>}
            </div>
            {work.descriptions.length > 0
              ? (<ul>
                {work.descriptions.map(description => (
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
