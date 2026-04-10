import { PersonalDetails } from "../components/PersonalDetails";
import { Summary } from "../components/Summary";
import { Skills } from "../components/Skills";
import { EntrySection } from "../components/Shared/EntrySection";

import { PersonalDetailsPreview } from "../components/PersonalDetailsPreview"
import { SkillsPreview } from "../components/SkillsPreview"
import { SummaryPreview } from "../components/SummaryPreview"
import { PreviewSection } from "../components/Shared/PreviewSection";

import { Personal as PersonalPDF } from "../pdf/sections/Personal"
import { Summary as SummaryPDF } from "../pdf/sections/Summary";
import { Skills as SkillsPDF } from "../pdf/sections/Skills"
import { PdfSection } from "../components/Shared/PdfSection";

export const SECTIONS_INPUTS = [
  { id: "personal", component: PersonalDetails },
  { id: "summary", component: Summary },
  { id: "skills", component: Skills },
  {
    id: "projects",
    component: EntrySection,
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
    component: EntrySection,
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
    component: EntrySection,
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

  {
    id: "projects",
    preview: PreviewSection,
    prevConfig: {
      title: "Projects",
      storeKey: "projects",
      primary: "name",
      secondary: "techStack",
      footerFields: [
        { key: "live", label: "Live" },
        { key: "repo", label: "Repo" }
      ],
    }
  },

  {
    id: "work",
    preview: PreviewSection,
    prevConfig: {
      title: "Professional Experience",
      storeKey: "work",
      primary: "company",
      prefix: "position",
      secondary: "period",
    }
  },

  {
    id: "education",
    preview: PreviewSection,
    prevConfig: {
      title: "Education",
      storeKey: "education",
      primary: "university",
      secondary: "period",
      tertiary: "degree",
    }
  },
]

export const SECTIONS_PDF = [
  { id: "personal", pdf: PersonalPDF },
  { id: "summary", pdf: SummaryPDF },
  { id: "skills", pdf: SkillsPDF },
  {
    id: "projects",
    pdf: PdfSection,
    pdfConfig: {
      title: "PROJECTS",
      primary: "name",
      storeKey: "projects",
      secondary: "techStack",
      footerFields: [
        { key: "live", label: "Live" },
        { key: "repo", label: "Repo" }
      ],
    }
  },
  {
    id: "work",
    pdf: PdfSection,
    pdfConfig: {
      title: "Professional Experience",
      storeKey: "work",
      primary: "company",
      prefix: "position",
      secondary: "period",
    }
  },
  {
    id: "education",
    pdf: PdfSection,
    pdfConfig: {
      title: "Education",
      storeKey: "education",
      primary: "university",
      secondary: "period",
      tertiary: "degree",
    }
  },
]

