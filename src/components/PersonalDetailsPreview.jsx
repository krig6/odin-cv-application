import { usePersonal } from "../store/cvStore";

export const PersonalDetailsPreview = () => {
  const person = usePersonal(state => state.person);

  if (!person.firstName.trim()) return null;

  const locationParts = [
    person.cityState,
    person.postalCode,
    person.country
  ].filter(Boolean).join(", ");

  return (
    <section className="preview-section" role="contentinfo">
      <h1>{person.firstName} {person.lastName}</h1>

      {person.jobTarget && <p>{person.jobTarget}</p>}

      <div className="preview-section__contact">
        {person.phone && <div>{person.phone}</div>}
        {person.email && <div>{person.email}</div>}
      </div>

      <div className="preview-section__links">
        {person.linkedin && <div>{person.linkedin}</div>}
        {person.github && <div>{person.github}</div>}
        {person.portfolio && <div>{person.portfolio}</div>}
      </div>

      {locationParts && <div>{locationParts}</div>}
    </section>
  );
};
