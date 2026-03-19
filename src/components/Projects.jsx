import { CollapsibleSection } from "./CollapsibleSection";
import { useProject } from "../store/cvStore";
import { SortableItems } from "./SortableSections";

export const Projects = ({ dragHandleProps }) => {
  const projects = useProject(state => state.projects);
  const addProject = useProject(state => state.addProject);
  const setProject = useProject(state => state.setProject);
  const deleteProject = useProject(state => state.deleteProject);
  const addDescription = useProject(state => state.addDescription);
  const setDescription = useProject(state => state.setDescription);
  const deleteDescription = useProject(state => state.deleteDescription);
  const reorderDescriptions = useProject(state => state.reorderDescriptions);
  const reorderProjects = useProject(state => state.reorderProjects);

  return (
    <div className="projects">
      <CollapsibleSection title="Projects" dragHandleProps={dragHandleProps}>

        <SortableItems
          items={projects}
          onReorder={reorderProjects}
          update={(id, val) => setProject(id, { name: val })}
          del={deleteProject}
          label="Project"
        >
          {(project) => (
            <>
              <div className="projects__tech-stack">
                <label htmlFor={`tech-${project.id}`}>Tech Stack</label>
                <input
                  id={`tech-${project.id}`}
                  value={project.techStack}
                  onChange={(e) => setProject(project.id, { techStack: e.target.value })}
                />
              </div>

              <div className="projects__links">
                <div className="projects__link projects__link--live">
                  <label htmlFor={`live-${project.id}`}>Live</label>
                  <input
                    id={`live-${project.id}`}
                    value={project.live}
                    onChange={(e) => setProject(project.id, { live: e.target.value })}
                  />
                </div>
                <div className="projects__link projects__link--repo">
                  <label htmlFor={`repo-${project.id}`}>Repo</label>
                  <input
                    id={`repo-${project.id}`}
                    value={project.repo}
                    onChange={(e) => setProject(project.id, { repo: e.target.value })}
                  />
                </div>
              </div>

              <SortableItems
                items={project.descriptions}
                onReorder={(newDesc) => reorderDescriptions(project.id, newDesc)}
                update={(descId, value) => setDescription(project.id, descId, { text: value })}
                del={(descId) => deleteDescription(project.id, descId)}
                label="Description"
              />

              <button
                className="projects__button projects__button--add-description"
                type="button"
                onClick={() => addDescription(project.id)}
              >
                + Add Description
              </button>
            </>
          )}
        </SortableItems>

        <button
          className="projects__button projects__button--add-project"
          type="button"
          onClick={addProject}
        >
          + Add project
        </button>

      </CollapsibleSection>
    </div>
  );
};
