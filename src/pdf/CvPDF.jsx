import { PDFDownloadLink } from "@react-pdf/renderer";
import { useCvStore } from "../store/cvStore";
import { DownloadPdfButton } from "../shared/ui/Buttons"
import { CvDocument } from "./CvDocument";

export const CvPdfDownload = ({ sections }) => (
  <div>
    <PDFDownloadLink
      document={<CvPdfDocument sections={sections} />}
      fileName="CV.pdf">
      {({ loading }) => (
        <DownloadPdfButton>
          {loading ? "Generating..." : "PDF"}
        </DownloadPdfButton>
      )}
    </PDFDownloadLink>
  </div>
)

const CvPdfDocument = ({ sections }) => {
  const personal = useCvStore(state => state.personal)
  const summary = useCvStore(state => state.summary)
  const skills = useCvStore(state => state.skills)

  return (
    <CvDocument
      personal={personal}
      summary={summary}
      skills={skills}
      sections={sections}
    />
  )
}
