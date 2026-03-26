import { Document, Page } from "@react-pdf/renderer";
import { PDF_SECTION_MAP } from "./sectionMap";

export const CvDocument = ({ personal, summary, skills, projects, work, education, sections }) => (
  <Document>
    <Page size="A4">
      {sections.map(section => {
        const SectionComponent = PDF_SECTION_MAP[section.id]

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
      })}
    </Page>
  </Document >
);
