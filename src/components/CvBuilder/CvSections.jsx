import { useState } from "react"
import { SECTIONS_INPUTS } from "../../data/sectionsMap.js"
import { SortableSection } from "../SortableSections"

export const CvSections = () => {
  const [sections, setSections] = useState([...SECTIONS_INPUTS])

  return (
    <section className="cv-builder__inputs">
      <SortableSection
        sections={sections}
        onReorder={setSections}
      />
    </section>
  )
}
