import { SECTIONS_PREVIEWS } from "../../data/sectionsMap"

export const CvPreviews = () =>
(
  <section className="cv-builder__previews">
    {
      SECTIONS_PREVIEWS.map(section => {
        const PreviewComponent = section.preview

        return <PreviewComponent
          key={section.id}
          {...(section.prevConfig && { config: section.prevConfig })}
        />
      })
    }
  </section>
)
