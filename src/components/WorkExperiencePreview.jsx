import { useWork } from "../store/cvStore"

export const WorkExperiencePreview = () => {
  const works = useWork(state => state.works)
  return works.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Professional Experience</h2>
      {works
        .filter(work => (work.name ?? "").toString().trim() !== "")
        .map(work => (
          <div className="preview-section__content" key={work.id}>
            <strong className="preview-section__name">{work.name}</strong>
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
