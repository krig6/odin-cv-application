import { useCvStore } from "../store/CvStore"

export const SummaryPreview = () => {
  const currentSummary = useCvStore(state => state.summary)

  return currentSummary
    ? (<section className="preview-section" >
      <h2 className="preview-section__title">Summary</h2>
      <p className="preview-section__content">
        {currentSummary}
      </p>
    </section >)
    : null
}
