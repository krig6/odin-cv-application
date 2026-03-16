import { CollapsibleSection } from "./CollapsibleSection"

export const Skills = () => {
  return (
    <div className="skills">
      <CollapsibleSection title="Skills">
        <div className="skills__fields"></div>
        <button className="skills__add-btn" type="button">+ Add skill</button>
      </CollapsibleSection>
    </div>
  )
}
