import { SECTIONS } from "../../data/sectionsMap"

export const CvPreviews = () =>
(
  <section className="cv-builder__previews">
    {
      SECTIONS.map(section => {
        const PreviewComponent = section.previewComponent

        return <PreviewComponent
          key={section.id}
          {...(section.config && { config: section.config })}
        />
      })
    }
  </section>
)
