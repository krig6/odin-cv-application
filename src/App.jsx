import { PersonalDetails } from "./components/PersonalDetails";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";
import { EducationDetails } from "./components/EducationDetails";
import { SortableContainer } from "./components/SortableSections";

import { SummaryPreview } from "./components/SummaryPreview"
import { SkillsPreview } from "./components/SkillsPreview"
import { ProjectPreview } from "./components/ProjectPreview"

export const App = () => {
  const components = [
    { id: "personal", component: <PersonalDetails /> },
    { id: "summary", component: <Summary /> },
    { id: "skills", component: <Skills /> },
    { id: "projects", component: <Projects /> },
    { id: "work", component: <WorkExperience /> },
    { id: "education", component: <EducationDetails /> },
  ];

  return (
    <div className="cv-builder">
      <div className="cv-builder__inputs">
        <SortableContainer components={components} />
      </div>
      <div className="cv-builder__preview">
        <SummaryPreview />
        <SkillsPreview />
        <ProjectPreview />
      </div>
    </div>
  );
};
