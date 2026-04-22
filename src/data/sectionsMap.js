import { PersonalDetails } from "../features/personal/PersonalDetails";
import { PersonalDetailsPreview } from "../features/personal/PersonalDetailsPreview"
import { Personal as PersonalPDF } from "../pdf/sections/Personal"

import { Summary } from "../features/summary/Summary";
import { SummaryPreview } from "../features/summary/SummaryPreview"
import { Summary as SummaryPDF } from "../pdf/sections/Summary";

import { Skills } from "../features/skills/Skills";
import { SkillsPreview } from "../features/skills/SkillsPreview"
import { Skills as SkillsPDF } from "../pdf/sections/Skills"

import { EntrySection } from "../features/entries/EntrySection";
import { PreviewSection } from "../features/entries/PreviewSection";
import { PdfSection } from "../pdf/sections/PdfSection";

export const SECTIONS = [
  {
    id: "personal",
    entryComponent: PersonalDetails,
    previewComponent: PersonalDetailsPreview,
    pdfComponent: PersonalPDF,
  },
  {
    id: "summary",
    entryComponent: Summary,
    previewComponent: SummaryPreview,
    pdfComponent: SummaryPDF,
  },
  {
    id: "skills",
    entryComponent: Skills,
    previewComponent: SkillsPreview,
    pdfComponent: SkillsPDF,
  },
  {
    id: "projects",
    entryComponent: EntrySection,
    previewComponent: PreviewSection,
    pdfComponent: PdfSection,
    config: {
      title: "Projects",
      storeKey: "projects",
      primary: "name",
      secondary: "techStack",
      className: "project__item",
      fallback: "Project Entry",
      label: "Name",
      fields: [
        { key: "techStack", label: "Tech Stack" },
        { key: "repo", label: "Source Code" },
        { key: "live", label: "Live Demo" },
      ],
    },
  },
  {
    id: "work",
    entryComponent: EntrySection,
    previewComponent: PreviewSection,
    pdfComponent: PdfSection,
    config: {
      title: "Work Experience",
      storeKey: "work",
      primary: "company",
      secondary: "period",
      prefix: "position",
      className: "work__item",
      fallback: "Work Entry",
      label: "Company",
      fields: [
        { key: "position", label: "Position" },
        { key: "period", label: "Period" },
      ],
    },
  },
  {
    id: "education",
    entryComponent: EntrySection,
    previewComponent: PreviewSection,
    pdfComponent: PdfSection,
    config: {
      title: "Education",
      storeKey: "education",
      primary: "university",
      secondary: "period",
      tertiary: "degree",
      className: "education_item",
      fallback: "Education Entry",
      label: "University",
      fields: [
        { key: "degree", label: "Degree" },
        { key: "period", label: "Period" },
      ],
    },
  },
];
