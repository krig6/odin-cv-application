import { useCvStore } from "../store/CvStore";
import styles from "./PersonalDetailsPreview.module.css"

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
    personal.email,
    personal.linkedin,
    personal.github,
    personal.portfolio,
  ]
    .filter(Boolean)
    .join(" | ");

  return (
    <section className={styles.section}>
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

      {contactInfo && (
        <span className={styles.contact}>
          {contactInfo}
        </span>
      )}
    </section>
  );
};
