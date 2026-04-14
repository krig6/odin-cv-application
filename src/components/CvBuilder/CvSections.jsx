import { useState } from "react"
import { SECTIONS } from "../../data/sectionsMap"
import { SortableSection } from "../Shared/SortableSection"

export const CvSections = () => {
  const [sections, setSections] = useState([...SECTIONS])

  return (
    <SortableSection
      sections={sections}
      onReorder={setSections}
    />
  )
}
