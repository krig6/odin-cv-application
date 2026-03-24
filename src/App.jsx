import { PersonalDetails } from "./components/PersonalDetails";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";
import { EducationDetails } from "./components/EducationDetails";

import { SummaryPreview } from "./components/SummaryPreview"
import { SkillsPreview } from "./components/SkillsPreview"
import { ProjectPreview } from "./components/ProjectPreview"
import { WorkExperiencePreview } from "./components/WorkExperiencePreview"
import { EducationDetailsPreview } from "./components/EducationDetailsPreview"
import { PersonalDetailsPreview } from "./components/PersonalDetailsPreview"

import { SortableSection } from "./components/SortableSections";

import { useState } from "react";

export const App = () => {
  const [sections, setSections] = useState([
    { id: "personal", component: <PersonalDetails />, preview: <PersonalDetailsPreview key={0} /> },
    { id: "summary", component: <Summary />, preview: <SummaryPreview key={1} /> },
    { id: "skills", component: <Skills />, preview: <SkillsPreview key={2} /> },
    { id: "projects", component: <Projects />, preview: <ProjectPreview key={3} /> },
    { id: "work", component: <WorkExperience />, preview: <WorkExperiencePreview key={4} /> },
    { id: "education", component: <EducationDetails />, preview: <EducationDetailsPreview key={5} /> },
  ]);

  return (
    <div className="cv-builder">
      <div className="cv-builder__inputs">
        <SortableSection
          sections={sections}
          onReorder={setSections} />
      </div>
      <div className="cv-builder__preview">
        {sections.map(section => section.preview)}
      </div>
    </div>
  );
};
