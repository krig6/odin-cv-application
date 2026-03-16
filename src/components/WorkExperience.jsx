import { CollapsibleSection } from "./CollapsibleSection"

export const WorkExperience = ({ dragHandleProps }) => {
  return (
    <div className="work-experience">
      <CollapsibleSection title="Professional Experience" dragHandleProps={dragHandleProps}>
        <div className="work-experience__fields"></div>
        <button className="work-experience__add-btn" type="button">+ Add employment</button>
      </CollapsibleSection>
    </div>
  )
}
