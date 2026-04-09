import { useState } from "react"
import { SECTIONS_INPUTS } from "../../data/sectionsMap"
import { SortableSection } from "../Shared/SortableSection"

export const CvSections = () => {
  const [sections, setSections] = useState([...SECTIONS_INPUTS])

  return (
    <SortableSection
      sections={sections}
      onReorder={setSections}
    />
  )
}
