import { CollapsibleSection } from "./CollapsibleSection"

export const EducationDetails = ({ dragHandleProps }) => {
  return (
    <div className="education-details">
      <CollapsibleSection title="Education" dragHandleProps={dragHandleProps}>
        <div className="education-details__fields"></div>
        <button className="education-details__add-btn" type="button">+ Add education</button>
      </CollapsibleSection>
    </div>
  )
}
