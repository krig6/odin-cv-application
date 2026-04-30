import { Document, Page } from "@react-pdf/renderer";
import { pdfStyles } from "./pdfStyles.js"
import { useCvStore } from "../store/cvStore.js";

export const CvDocument = ({ sections }) => {
  const personal = useCvStore(state => state.personal)
  const summary = useCvStore(state => state.summary)
  const skills = useCvStore(state => state.skills)

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {
          sections.map(section => {
            const PdfComponent = section.pdfComponent

            if (!PdfComponent) return null

            return (
              <PdfComponent
                key={section.id}
                personal={personal}
                summary={summary}
                skills={skills}
                {...(section.config && { config: section.config })}
              />
            )
          })
        }
      </Page>
    </Document>
  )
}
