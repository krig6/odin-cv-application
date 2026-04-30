import { useState } from "react";
import { ArrowLeft } from "@boxicons/react";
import { SECTIONS } from "../data/sectionsMap";
import { CvSections } from "./CvBuilder/CvSections";
import { CvPreviews } from "./CvBuilder/CvPreviews";
import { CvActionsPanel } from "./CvBuilder/CvActionsPanel";
import { CvPdfPreview } from "../pdf/CvPdfPreview";
import { ActionButton } from "../shared/ui/Buttons";
import styles from "./App.module.css"

export const App = () => {
  const [sections, setSections] = useState([...SECTIONS])
  const [isPdfOpen, setIsPdfOpen] = useState(false)

  if (isPdfOpen) {
    return (
      <div className={styles.pdfOverlay}>

        <CvPdfPreview sections={sections} />

        <ActionButton
          icon={<ArrowLeft />}
          onClick={() => setIsPdfOpen(false)}
        >
          Back
        </ActionButton>

      </div>
    )
  }

  return (
    <main className={styles.builder}>

      <section className={styles.inputs}>
        <CvSections sections={sections} setSections={setSections} />
      </section>

      <section className={styles.preview}>
        <CvPreviews sections={sections} />
      </section>

      <section className={styles.actions}>
        <CvActionsPanel
          sections={sections}
          onPreview={() => setIsPdfOpen(true)}
        />
      </section>

    </main >
  )
};
