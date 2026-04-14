export const CvPreviews = ({ sections }) =>
(
  <section className="cv-builder__previews">
    {
      sections.map(section => {
        const PreviewComponent = section.previewComponent

        return <PreviewComponent
          key={section.id}
          {...(section.config && { config: section.config })}
        />
      })
    }
  </section>
)
