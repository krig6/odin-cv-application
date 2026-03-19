import { useCvStore } from "../store/CvStore"

export const ProjectPreview = () => {
  const projects = useCvStore(state => state.projects)

  return projects.length > 0
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Projects</h2>
      {projects
        .filter(project => (project.name ?? "").toString().trim() !== "")
        .map(project => (
          <div className="preview-section__content" key={project.id}>
            <div className="preview-section__header">
              <strong className="preview-section__name">{project.name}</strong>
              {project.techStack && <span className="preview-section__tech">{project.techStack}</span>}
            </div>
            {project.descriptions.length > 0
              ? (<ul>
                {
                  project.descriptions.map(desc => (
                    <li key={desc.id}>{desc.text}</li>
                  ))
                }
              </ul>
              ) : null
            }
            {project.live && <span className="preview-section__link preview-section__link--live">{project.live}</span>}
            {project.repo && <span className="preview-section__link preview-section__link--repo">{project.repo}</span>}
          </div>
        ))
      }
    </section >)
    : null
}
