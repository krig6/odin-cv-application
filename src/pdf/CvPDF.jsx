import { PDFDownloadLink } from "@react-pdf/renderer";
import { ActionButton } from "../shared/ui/Buttons"
import { CvDocument } from "./CvDocument";
import { ArrowToBottom } from "@boxicons/react";

export const CvPdfDownload = ({ sections }) => (
  <div>
    <PDFDownloadLink
      document={
        <CvDocument sections={sections} />
      }
      fileName="CV.pdf">
      {({ loading }) => (
        <ActionButton
          icon={<ArrowToBottom />}
        >
          {loading ? "Generating..." : "PDF"}
        </ActionButton>
      )}
    </PDFDownloadLink>
  </div>
)
