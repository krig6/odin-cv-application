export const PersonalDetails = () => {
  return (
    <div className="personal-details">
      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="job-target">Job Target</label>
        <input className="personal-details__input" id="job-target" type="text" placeholder="The role you want" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="first-name">First Name</label>
        <input className="personal-details__input" id="first-name" type="text" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="last-name">Last Name</label>
        <input className="personal-details__input" id="last-name" type="text" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="email">Email</label>
        <input className="personal-details__input" id="email" type="email" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="phone">Phone</label>
        <input className="personal-details__input" id="phone" type="tel" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="linkedin">LinkedIn URL</label>
        <input className="personal-details__input" id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="github">GitHub (optional)</label>
        <input className="personal-details__input" id="github" type="url" placeholder="https://github.com/..." />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="portfolio">Portfolio (optional)</label>
        <input className="personal-details__input" id="portfolio" type="url" placeholder="https://..." />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="postal-code">Postal Code</label>
        <input className="personal-details__input" id="postal-code" type="text" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="city-state">City / State</label>
        <input className="personal-details__input" id="city-state" type="text" />
      </div>

      <div className="personal-details__field">
        <label className="personal-details__label" htmlFor="country">Country</label>
        <input className="personal-details__input" id="country" type="text" />
      </div>
    </div>
  )
}
