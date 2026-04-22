import { CollapsibleSection } from "./Shared/CollapsibleSection";
import { useCvStore } from "../store/cvStore";
import { InputField } from "./Shared/InputField";
import styles from "./PersonalDetails.module.css"

const personalFieldsConfig = [
  { name: "jobTarget", id: "job-target", label: "Job Target", type: "text", placeholder: "The role you want" },
  { name: "firstName", id: "first-name", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", id: "last-name", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "email", id: "email", label: "Email", type: "email", autoComplete: "email", pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" },
  { name: "phone", id: "phone", label: "Phone", type: "tel", autoComplete: "tel", inputMode: "tel", pattern: "[0-9+()\\s-]*" },
  { name: "linkedin", id: "linkedin", label: "LinkedIn", type: "url", placeholder: "https://linkedin.com/in/...", inputMode: "url" },
  { name: "github", id: "github", label: "GitHub", type: "url", placeholder: "https://github.com/...", inputMode: "url" },
  { name: "portfolio", id: "portfolio", label: "Portfolio", type: "url", placeholder: "https://...", inputMode: "url" },
  { name: "cityState", id: "city-state", label: "City/State", type: "text" },
  { name: "postalCode", id: "postal-code", label: "Postal Code", type: "text", autoComplete: "postal-code", inputMode: "numeric" },
  { name: "country", id: "country", label: "Country", type: "text", autoComplete: "country-name" },
];

export const PersonalDetails = ({ dragHandleProps }) => (
  <CollapsibleSection title="Personal Details" dragHandleProps={dragHandleProps}>
    <div className={styles.wrapper}>
      <PersonalFields />
    </div>
  </CollapsibleSection>
);

const PersonalFields = () => {
  const personal = useCvStore(state => state.personal);
  const setPersonal = useCvStore(state => state.setPersonal);

  return personalFieldsConfig.map(field => (
    <InputField
      key={field.id}
      id={field.id}
      label={field.label}
      className={styles[field.name]}
      type={field.type}
      onChange={(value) => setPersonal({ [field.name]: value })}
      value={personal[field.name] ?? ""}
      {...(field.placeholder && { placeholder: field.placeholder })}
      {...(field.autoComplete && { autoComplete: field.autoComplete })}
      {...(field.inputMode && { inputMode: field.inputMode })}
      {...(field.pattern && { pattern: field.pattern })}
    />
  ));
};
