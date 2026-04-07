import { PersonalDetails } from "../components/PersonalDetails";
import { Summary } from "../components/Summary";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects"
import { WorkExperience } from "../components/WorkExperience";
import { EducationDetails } from "../components/EducationDetails";

import { PersonalDetailsPreview } from "../components/PersonalDetailsPreview"
import { SkillsPreview } from "../components/SkillsPreview"
import { SummaryPreview } from "../components/SummaryPreview"
import { WorkExperiencePreview } from "../components/WorkExperiencePreview"
import { ProjectPreview } from "../components/ProjectPreview"
import { EducationDetailsPreview } from "../components/EducationDetailsPreview"

export const SECTIONS_INPUTS = [
  { id: "personal", component: PersonalDetails },
  { id: "summary", component: Summary },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "work", component: WorkExperience },
  { id: "education", component: EducationDetails },
]

export const SECTIONS_PREVIEWS = [
  { id: "personal", preview: PersonalDetailsPreview },
  { id: "summary", preview: SummaryPreview },
  { id: "skills", preview: SkillsPreview },
  { id: "projects", preview: ProjectPreview },
  { id: "work", preview: WorkExperiencePreview },
  { id: "education", preview: EducationDetailsPreview },
]
