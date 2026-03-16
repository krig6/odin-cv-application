import { CollapsibleSection } from "./CollapsibleSection"

export const Projects = () => {
  return (
    <div className="projects">
      <CollapsibleSection title="Projects">
        <div className="projects__fields"></div>
        <button className="projects__add-btn" type="button">+ Add project</button>
      </CollapsibleSection>
    </div>
  )
}
