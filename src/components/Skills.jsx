import { CollapsibleSection } from "./CollapsibleSection"

export const Skills = ({ dragHandleProps }) => {
  return (
    <div className="skills">
      <CollapsibleSection title="Skills" dragHandleProps={dragHandleProps}>
        <div className="skills__fields"></div>
        <button className="skills__add-btn" type="button">+ Add skill</button>
      </CollapsibleSection>
    </div>
  )
}
