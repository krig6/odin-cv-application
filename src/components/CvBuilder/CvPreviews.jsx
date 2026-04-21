export const CvPreviews = ({ sections }) =>
(
  sections.map(section => {
    const PreviewComponent = section.previewComponent

    return <PreviewComponent
      key={section.id}
      {...(section.config && { config: section.config })}
    />
  })
)
