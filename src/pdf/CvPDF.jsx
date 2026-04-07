import { ArrowToBottom } from "@boxicons/react";
import { IconButton } from "../components/Shared/Buttons"
import { CvDocument } from "./CvDocument";
import { useCvStore } from "../store/CvStore";
import { pdf } from "@react-pdf/renderer";
import { SECTIONS_PDF } from "../data/sectionsMap";

export const CvPDF = () => {
  const personal = useCvStore(state => state.personal)
  const summary = useCvStore(state => state.summary)
  const skills = useCvStore(state => state.skills)
  const projects = useCvStore(state => state.projects)
  const work = useCvStore(state => state.work)
  const education = useCvStore(state => state.education)

  const handleDownloadPDF = async () => {
    const blob = await pdf(
      <CvDocument
        personal={personal}
        summary={summary}
        skills={skills}
        projects={projects}
        work={work}
        education={education}
        sections={SECTIONS_PDF}
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
    <IconButton icon={<ArrowToBottom />} onClick={handleDownloadPDF} />
  );
}
