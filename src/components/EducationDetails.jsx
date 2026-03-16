import { CollapsibleSection } from "./CollapsibleSection"

export const EducationDetails = () => {
  return (
    <div className="education-details">
      <CollapsibleSection title="Education">
        <div className="education-details__fields"></div>
        <button className="education-details__add-btn" type="button">+ Add education</button>
      </CollapsibleSection>
    </div>
  )
}
