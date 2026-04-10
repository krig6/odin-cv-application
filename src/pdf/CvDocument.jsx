import { Document, Page } from "@react-pdf/renderer";
import { pdfStyles } from "./pdfStyles.js"

export const CvDocument = ({ personal, summary, skills, sections }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      {
        sections.map(section => {
          const PdfComponent = section.pdf

          if (!PdfComponent) return null

          return (
            <PdfComponent
              key={section.id}
              personal={personal}
              summary={summary}
              skills={skills}
              {...(section.pdfConfig && { pdfConfig: section.pdfConfig })}
            />
          )
        })
      }
    </Page >
  </Document >
);
