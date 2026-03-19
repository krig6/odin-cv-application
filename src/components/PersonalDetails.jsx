import { CollapsibleSection } from "./CollapsibleSection"
import { useCvStore } from "../store/CvStore"

export const PersonalDetails = ({ dragHandleProps }) => {
  const setPerson = useCvStore(state => state.setPerson)
  return (
    <div className="personal-details">
      <CollapsibleSection title="Personal Details" dragHandleProps={dragHandleProps}>
        <div className="personal-details__fields">
          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="job-target">Job Target</label>
            <input className="personal-details__input" id="job-target" type="text" placeholder="The role you want" onChange={(e) => setPerson({ jobTarget: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="first-name">First Name</label>
            <input className="personal-details__input" id="first-name" type="text" onChange={(e) => setPerson({ firstName: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="last-name">Last Name</label>
            <input className="personal-details__input" id="last-name" type="text" onChange={(e) => setPerson({ lastName: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="email">Email</label>
            <input className="personal-details__input" id="email" type="email" onChange={(e) => setPerson({ email: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="phone">Phone</label>
            <input className="personal-details__input" id="phone" type="tel" onChange={(e) => setPerson({ phone: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="linkedin">LinkedIn URL</label>
            <input className="personal-details__input" id="linkedin" type="url" placeholder="https://linkedin.com/in/..." onChange={(e) => setPerson({ linkedin: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="github">GitHub (optional)</label>
            <input className="personal-details__input" id="github" type="url" placeholder="https://github.com/..." onChange={(e) => setPerson({ github: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="portfolio">Portfolio (optional)</label>
            <input className="personal-details__input" id="portfolio" type="url" placeholder="https://..." onChange={(e) => setPerson({ portfolio: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="city-state">City / State</label>
            <input className="personal-details__input" id="city-state" type="text" onChange={(e) => setPerson({ cityState: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="postal-code">Postal Code</label>
            <input className="personal-details__input" id="postal-code" type="text" onChange={(e) => setPerson({ postalCode: e.target.value })} />
          </div>

          <div className="personal-details__field">
            <label className="personal-details__label" htmlFor="country">Country</label>
            <input className="personal-details__input" id="country" type="text" onChange={(e) => setPerson({ country: e.target.value })} />
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
