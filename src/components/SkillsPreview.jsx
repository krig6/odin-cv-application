import { useCvStore } from "../store/CvStore"

export const SkillsPreview = () => {
  const skills = useCvStore(state => state.skills)

  return skills.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Skills</h2>
      {skills
        .filter(skill => (skill.category ?? "").toString().trim() !== "")
        .map(skill => (
          <div className="preview-section__content" key={skill.id}>
            <div className="preview-section__header">
              <strong className="preview-section__name">{skill.category}</strong>
            </div>
            {skill.entries.length > 0
              ? (<ul>
                {
                  skill.entries.map(entry => (
                    <li key={entry.id}>{entry.name}</li>
                  ))
                }
              </ul>
              ) : null
            }
          </div>
        ))
      }
    </section >)
    : null
}
