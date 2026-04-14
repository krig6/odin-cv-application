import { SortableSection } from "../Shared/SortableSection"

export const CvSections = ({ sections, setSections }) => {
  return (
    <SortableSection
      sections={sections}
      onReorder={setSections}
    />
  )
}
