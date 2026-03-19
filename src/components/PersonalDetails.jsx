import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore"

const personFieldsConfig = [
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
]

export const PersonalDetails = ({ dragHandleProps }) => {
  return (
    <div className="personal-details">
      <CollapsibleSection title="Personal Details" dragHandleProps={dragHandleProps}>
        <div className="personal-details__fields">
          <PersonInputs />
        </div>
      </CollapsibleSection>
    </div>
  )
}

const PersonInputs = () => {
  const person = useCvStore(state => state.person)
  const setPerson = useCvStore(state => state.setPerson)
  return personFieldsConfig.map(field => (
    <div className="personal-details__field" key={field.id} >
      <label className="personal-details__label" htmlFor={field.id}>{field.label}</label>
      <input
        className="personal-details__input"
        id={field.id}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder ?? ""}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        pattern={field.pattern}
        value={person[field.name] ?? ""}
        onChange={(e) => setPerson({ [field.name]: e.target.value })}
      />
    </div >
  ))
}
