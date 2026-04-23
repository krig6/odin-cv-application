import { useState } from "react";
import { SECTIONS } from "../data/sectionsMap";
import { CvSections } from "./CvBuilder/CvSections";
import { CvPreviews } from "./CvBuilder/CvPreviews";
import { CvActionsPanel } from "./CvBuilder/CvActionsPanel";
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
      </section>

      <section className={styles.actions}>
        <CvActionsPanel sections={sections} />
      </section>
    </main>
  );
};
