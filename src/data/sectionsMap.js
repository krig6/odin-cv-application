import { PersonalDetails } from "../components/PersonalDetails";
import { Summary } from "../components/Summary";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects"
import { WorkExperience } from "../components/WorkExperience";
import { EducationDetails } from "../components/EducationDetails";

export const SECTIONS_INPUTS = [
  { id: "personal", component: PersonalDetails },
  { id: "summary", component: Summary },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "work", component: WorkExperience },
  { id: "education", component: EducationDetails },
]
