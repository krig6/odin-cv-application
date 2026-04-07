import { CvSections } from "./components/CvBuilder/CvSections";
import { CvPreviews } from "./components/CvBuilder/CvPreviews";
import { CvPDF } from "./pdf/CvPDF";

export const App = () => {
  return (
    <main className="cv-builder">
      <section className="cv-builder__inputs">
        <CvSections />
      </section>

      <section className="cv-builder__preview">
        <CvPreviews />
        <CvPDF />
      </section>
    </main>
  );
};
