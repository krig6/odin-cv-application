import { CollapsibleSection } from "./CollapsibleSection";
import { useCvStore } from "../store/CvStore";
import { SortableItems } from "./SortableSections";

export const Projects = ({ dragHandleProps }) => {
  const projects = useCvStore(state => state.projects)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const deleteDescription = useCvStore(state => state.deleteDescription)
  const reorderItems = useCvStore(state => state.reorderItems);
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions);

  return (
    <div className="projects">
      <CollapsibleSection title="Projects" dragHandleProps={dragHandleProps}>

        <SortableItems
          items={projects}
          onReorder={(newArray) => reorderItems("projects", newArray)}
          update={(itemId, val) => setItem("projects", itemId, { name: val })}
          del={(itemId) => deleteItem("projects", itemId)}
          label="Project"
        >
          {(project) => (
            <>
              <div className="projects__tech-stack">
                <label htmlFor={`tech-${project.id}`}>Tech Stack</label>
                <input
                  id={`tech-${project.id}`}
                  value={project.techStack}
                  onChange={(e) => setItem("projects", project.id, { techStack: e.target.value })}
                />
              </div>

              <div className="projects__links">
                <div className="projects__link projects__link--live">
                  <label htmlFor={`live-${project.id}`}>Live</label>
                  <input
                    id={`live-${project.id}`}
                    value={project.live}
                    onChange={(e) => setItem("projects", project.id, { live: e.target.value })}
                  />
                </div>
                <div className="projects__link projects__link--repo">
                  <label htmlFor={`repo-${project.id}`}>Repo</label>
                  <input
                    id={`repo-${project.id}`}
                    value={project.repo}
                    onChange={(e) => setItem("projects", project.id, { repo: e.target.value })}
                  />
                </div>
              </div>

              <SortableItems
                items={project.descriptions}
                onReorder={(newDesc) => reorderDescriptions("projects", project.id, newDesc)}
                update={(descId, value) => setDescription("projects", project.id, descId, value)}
                del={(descId) => deleteDescription("projects", project.id, descId)}
                label="Description"
              />

              <button
                className="projects__button projects__button--add-description"
                type="button"
                onClick={() => addDescription("projects", project.id)}
              >
                + Add Description
              </button>
            </>
          )}
        </SortableItems>

        <button
          className="projects__button projects__button--add-project"
          type="button"
          onClick={() => addItem("projects")}
        >
          + Add project
        </button>

      </CollapsibleSection>
    </div>
  );
};
