import { useCvStore } from "../store/CvStore";

export const PersonalDetailsPreview = () => {
  const personal = useCvStore(state => state.personal);

  if (!personal.firstName.trim()) return null;

  const locationParts = [
    personal.cityState,
    personal.postalCode,
    personal.country
  ].filter(Boolean).join(", ");

  return (
    <section className="preview-section" role="contentinfo">
      <h1>{personal.firstName} {personal.lastName}</h1>

      {personal.jobTarget && <p>{personal.jobTarget}</p>}

      <div className="preview-section__contact">
        {personal.phone && <div>{personal.phone}</div>}
        {personal.email && <div>{personal.email}</div>}
      </div>

      <div className="preview-section__links">
        {personal.linkedin && <div>{personal.linkedin}</div>}
        {personal.github && <div>{personal.github}</div>}
        {personal.portfolio && <div>{personal.portfolio}</div>}
      </div>

      {locationParts && <div>{locationParts}</div>}
    </section>
  );
};
