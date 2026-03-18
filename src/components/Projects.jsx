import { CollapsibleSection } from "./CollapsibleSection"
import { TrashAlt } from "@boxicons/react"
import { useProject } from "../store/cvStore"

export const Projects = ({ dragHandleProps }) => {
  const projects = useProject(state => state.projects)
  const addProject = useProject(state => state.addProject)
  const setProject = useProject(state => state.setProject)
  const deleteProject = useProject(state => state.deleteProject)
  const addDescription = useProject(state => state.addDescription)
  const setDescription = useProject(state => state.setDescription)
  const deleteDescription = useProject(state => state.deleteDescription)

  return (
    <div className="projects">
      <CollapsibleSection title="Projects" dragHandleProps={dragHandleProps}>
        <div className="projects__list">
          {projects.map(project => (
            <div className="projects__item" key={project.id}>
              <div className="projects__header">
                <label className="projects__label" htmlFor={project.id}>Project</label>
                <input
                  id={project.id}
                  className="projects__input"
                  value={project.name}
                  onChange={(e) => setProject(project.id, { name: e.target.value })}
                />
                <button
                  className="projects__button projects__button--delete" type="button" onClick={() => deleteProject(project.id)}
                >
                  <TrashAlt />
                </button>
              </div>
              <div className="projects__tech-stack">
                <label className="projects__label" htmlFor={`tech-${project.id}`}>Tech Stack</label>
                <input
                  id={`tech-${project.id}`}
                  className="projects__input"
                  value={project.techStack}
                  onChange={(e) => setProject(project.id, { techStack: e.target.value })}
                />
              </div>
              <div className="projects__links">
                <div className="projects__link projects__link--live">
                  <label className="projects__label" htmlFor={`live-${project.id}`}>Live</label>
                  <input
                    id={`live-${project.id}`}
                    className="projects__input"
                    value={project.live}
                    onChange={(e) => setProject(project.id, { live: e.target.value })}
                  />
                </div>
                <div className="projects__link projects__link--repo">
                  <label className="projects__label" htmlFor={`repo-${project.id}`}>Repo</label>
                  <input
                    id={`repo-${project.id}`}
                    className="projects__input"
                    value={project.repo}
                    onChange={(e) => setProject(project.id, { repo: e.target.value })}
                  />
                </div>
              </div>
              <div className="projects__descriptions">
                {project.descriptions.map(description => (
                  <div className="projects__description" key={description.id}>
                    <input
                      id={`desc-${description.id}`}
                      className="projects__input"
                      value={description.text}
                      onChange={(e) => setDescription(project.id, description.id, { text: e.target.value })}
                    />
                    <button
                      className="projects__button projects__button--delete" type="button" onClick={() => deleteDescription(project.id, description.id)}
                    >
                      <TrashAlt />
                    </button>
                  </div>
                ))}
              </div>
              <button className="projects__button projects__button--add-description" type="button" onClick={() => addDescription(project.id)}>+ Add Description</button>
            </div>
          ))}
        </div>
        <button className="projects__button projects__button--add-project" type="button" onClick={addProject}>+ Add project</button>
      </CollapsibleSection >
    </div >
  )
}
