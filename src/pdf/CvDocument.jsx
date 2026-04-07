import { Document, Page } from "@react-pdf/renderer";
import { pdfStyles } from "./pdfStyles.js"

export const CvDocument = ({ personal, summary, skills, projects, work, education, sections }) => (
  <Document>
    <Page size="A4" style={pdfStyles.page}>
      {
        sections.map(section => {
          const SectionComponent = section.pdf

          if (!SectionComponent) return null

          return (
            <SectionComponent
              key={section.id}
              personal={personal}
              summary={summary}
              skills={skills}
              projects={projects}
              work={work}
              education={education}
            />
          )
        })
      }
    </Page >
  </Document >
);
