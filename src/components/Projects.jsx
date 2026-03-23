import { CollapsibleSection } from "./CollapsibleSection";
import { useCvStore } from "../store/CvStore";
import { SortableItems } from "./SortableSections";
import { InputField } from "./Shared/InputField";
import { AddButton } from "./Shared/Buttons";

export const Projects = ({ dragHandleProps }) => {
  const projects = useCvStore(state => state.projects)
  const addItem = useCvStore(state => state.addItem)
  const setItem = useCvStore(state => state.setItem)
  const deleteItem = useCvStore(state => state.deleteItem)
  const reorderItems = useCvStore(state => state.reorderItems);

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
          {project => (
            <ProjectItems
              project={project}
              setItem={setItem}
            />
          )}
        </SortableItems>

        <AddButton onClick={() => addItem("projects")}>
          Add Project
        </AddButton>

      </CollapsibleSection>
    </div >
  );
};

const ProjectItems = ({ project, setItem }) => {
  const addDescription = useCvStore(state => state.addDescription)
  const setDescription = useCvStore(state => state.setDescription)
  const reorderDescriptions = useCvStore(state => state.reorderDescriptions)
  const deleteDescription = useCvStore(state => state.deleteDescription)

  return (
    <>
      <InputField
        id={`tech-${project.id}`}
        value={project.techStack ?? ""}
        label="Tech Stack"
        onChange={(value) =>
          setItem("projects", project.id, { techStack: value })
        }
      />

      <div className="projects__links">
        <InputField
          id={`live-${project.id}`}
          value={project.live ?? ""}
          label="Live"
          onChange={(value) =>
            setItem("projects", project.id, { live: value })
          }
        />
        <InputField
          id={`repo-${project.id}`}
          value={project.repo ?? ""}
          label="Repo"
          onChange={(value) =>
            setItem("projects", project.id, { repo: value })
          }
        />
      </div>

      <SortableItems
        items={project.descriptions}
        onReorder={(newDesc) => reorderDescriptions("projects", project.id, newDesc)}
        update={(descId, value) => setDescription("projects", project.id, descId, value)}
        del={(descId) => deleteDescription("projects", project.id, descId)}
        label="Description"
      />

      <AddButton onClick={() => addDescription("projects", project.id)}>
        Add Project Description
      </AddButton>
    </>
  )
}
