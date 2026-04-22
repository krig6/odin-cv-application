import { useCvStore } from "../store/cvStore"
import styles from "./CvBuilder/CvPreviews.module.css"

export const SummaryPreview = () => {
  const currentSummary = useCvStore(state => state.summary)

  return (
    currentSummary && (
      <section className={styles.section}>
        <header className={styles.sectionTitle}>
          Summary
        </header>
        <span className={styles.sectionDivider}></span>
        <p>{currentSummary}</p>
      </section>
    )
  )
}
