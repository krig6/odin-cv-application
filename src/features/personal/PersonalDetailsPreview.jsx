import { useCvStore } from "../../store/cvStore";
import styles from "../../app/CvBuilder/CvPreviews.module.css"

export const PersonalDetailsPreview = () => {
  const personal = useCvStore(state => state.personal);

  if (!personal.firstName.trim()) return null;

  const address = [
    personal.cityState,
    personal.postalCode,
    personal.country,
  ]
    .filter(Boolean)
    .join(", ");

  const contactInfo = [
    address,
    personal.phone,
  ]
    .filter(Boolean)
    .join(" | ");

  const links = [
    { id: "email", label: "Email" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "github", label: "GitHub" },
    { id: "portfolio", label: "Portfolio" },
  ].filter(link => personal[link.id]?.trim());

  return (
    <section className={`${styles.section} ${styles.centerText}`}>
      <header>
        <span className={styles.name}>
          {`${personal.firstName || ""} ${personal.lastName || ""}`.trim()}
        </span>
      </header>

      {personal.jobTarget && (
        <span className={styles.job}>
          {personal.jobTarget}
        </span>
      )}

      <div>
        {contactInfo && (
          <span className={styles.contact}>
            {contactInfo}
          </span>
        )}

        {contactInfo && links.length > 0 && <span> {" | "} </span>}

        {links.map((link, index) => (
          <span key={link.id}>
            <a href={personal[link.id]}>
              {link.label}
            </a>
            {index < links.length - 1 && <span> | </span>}
          </span>
        ))}
      </div>

    </section>
  );
};
