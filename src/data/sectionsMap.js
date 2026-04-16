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
        { key: "live", label: "Live" },
        { key: "repo", label: "Repo" },
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
