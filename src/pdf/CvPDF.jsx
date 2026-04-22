import { DownloadPdfButton } from "../components/Shared/Buttons"
import { CvDocument } from "./CvDocument";
import { useCvStore } from "../store/cvStore";
import { pdf } from "@react-pdf/renderer";

export const CvPDF = ({ sections }) => {
  const personal = useCvStore(state => state.personal)
  const summary = useCvStore(state => state.summary)
  const skills = useCvStore(state => state.skills)

  const handleDownloadPDF = async () => {
    const blob = await pdf(
      <CvDocument
        personal={personal}
        summary={summary}
        skills={skills}
        sections={sections}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DownloadPdfButton
      onClick={handleDownloadPDF}
    >
      PDF
    </DownloadPdfButton>
  );
}
