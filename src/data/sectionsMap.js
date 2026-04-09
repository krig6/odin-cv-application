import { PersonalDetails } from "../components/PersonalDetails";
import { Summary } from "../components/Summary";
import { Skills } from "../components/Skills";
import { ConfigSection } from "../components/Shared/ConfigSection";

import { PersonalDetailsPreview } from "../components/PersonalDetailsPreview"
import { SkillsPreview } from "../components/SkillsPreview"
import { SummaryPreview } from "../components/SummaryPreview"
import { WorkExperiencePreview } from "../components/WorkExperiencePreview"
import { ProjectPreview } from "../components/ProjectPreview"
import { EducationDetailsPreview } from "../components/EducationDetailsPreview"

import { Personal as PersonalPDF } from "../pdf/sections/Personal"
import { Summary as SummaryPDF } from "../pdf/sections/Summary";
import { Skills as SkillsPDF } from "../pdf/sections/Skills"
import { Projects as ProjectsPDF } from "../pdf/sections/Projects"
import { Work as WorkPDF } from "../pdf/sections/Work";
import { Education as EducationPDF } from "../pdf/sections/Education";


export const SECTIONS_INPUTS = [
  { id: "personal", component: PersonalDetails },
  { id: "summary", component: Summary },
  { id: "skills", component: Skills },
  {
    id: "projects",
    component: ConfigSection,
    config: {
      title: "Projects",
      storeKey: "projects",
      className: "project__item",
      mainField: {
        key: "name",
        fallback: "Project Entry"
      },
      fields: [
        { key: "techStack", label: "Tech Stack" },
        { key: "live", label: "Live" },
        { key: "repo", label: "Repo" },
      ]
    }
  },
  {
    id: "work",
    component: ConfigSection,
    config: {
      title: "Professional Experience",
      storeKey: "work",
      className: "work__item",
      mainField: {
        key: "company",
        fallback: "Work Entry"
      },
      fields: [
        { key: "position", label: "Position" },
        { key: "period", label: "Period" },
      ]
    }
  },
  {
    id: "education",
    component: ConfigSection,
    config: {
      title: "Education",
      storeKey: "education",
      className: "education_item",
      mainField: {
        key: "university",
        fallback: "Education Entry"
      },
      fields: [
        { key: "degree", label: "Degree" },
        { key: "period", label: "Period" },
      ]
    }
  },
]

export const SECTIONS_PREVIEWS = [
  { id: "personal", preview: PersonalDetailsPreview },
  { id: "summary", preview: SummaryPreview },
  { id: "skills", preview: SkillsPreview },
  { id: "projects", preview: ProjectPreview },
  { id: "work", preview: WorkExperiencePreview },
  { id: "education", preview: EducationDetailsPreview },
]

export const SECTIONS_PDF = [
  { id: "personal", pdf: PersonalPDF },
  { id: "summary", pdf: SummaryPDF },
  { id: "skills", pdf: SkillsPDF },
  { id: "projects", pdf: ProjectsPDF },
  { id: "work", pdf: WorkPDF },
  { id: "education", pdf: EducationPDF },
]

