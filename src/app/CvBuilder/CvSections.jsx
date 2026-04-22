import { SortableSection } from "../../shared/dnd/SortableSection.jsx"

export const CvSections = ({ sections, setSections }) => {
  return (
    <SortableSection
      sections={sections}
      onReorder={setSections}
    />
  )
}
