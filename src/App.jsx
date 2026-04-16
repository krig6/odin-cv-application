import { CvSections } from "./components/CvBuilder/CvSections";
import { CvPreviews } from "./components/CvBuilder/CvPreviews";
import { CvPDF } from "./pdf/CvPDF";
import { SECTIONS } from "./data/sectionsMap";
import { useState } from "react";
import styles from "./App.module.css"

export const App = () => {
  const [sections, setSections] = useState([...SECTIONS])

  return (
    <main className={styles.builder}>
      <section className={styles.inputs}>
        <CvSections sections={sections} setSections={setSections} />
      </section>

      <section className={styles.preview}>
        <CvPreviews sections={sections} />
        <CvPDF sections={sections} />
      </section>
    </main>
  );
};
