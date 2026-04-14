import { CvSections } from "./components/CvBuilder/CvSections";
import { CvPreviews } from "./components/CvBuilder/CvPreviews";
import { CvPDF } from "./pdf/CvPDF";
import { SECTIONS } from "./data/sectionsMap";
import { useState } from "react";

export const App = () => {
  const [sections, setSections] = useState([...SECTIONS])

  return (
    <main className="cv-builder">
      <section className="cv-builder__inputs">
        <CvSections sections={sections} setSections={setSections} />
      </section>

      <section className="cv-builder__preview">
        <CvPreviews sections={sections} />
        <CvPDF sections={sections} />
      </section>
    </main>
  );
};
