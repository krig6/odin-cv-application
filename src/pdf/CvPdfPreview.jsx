import { PDFViewer } from "@react-pdf/renderer";
import { CvDocument } from "./CvDocument";

export const CvPdfPreview = ({ sections }) => (
  <PDFViewer style={{ width: "100%", height: "100%" }}>
    <CvDocument sections={sections} />
  </PDFViewer>
)
