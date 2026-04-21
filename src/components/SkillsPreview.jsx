import { useCvStore } from "../store/CvStore"
import styles from "./CvBuilder/CvPreviews.module.css"

export const SkillsPreview = () => {
  const skills = useCvStore(state => state.skills)

  if (skills.length === 0) return null

  return (
    <section className={styles.section}>
      <header>
        <span className={styles.sectionTitle}>
          Skills
        </span>
      </header>

      <span className={styles.sectionDivider}></span>

      {skills
        .filter(skill => skill.category && skill.category.trim() !== "")
        .map(skill => {
          const entries = skill.entries
            ?.map(entry => entry.name)
            .filter(Boolean)
            .join(", ");

          return (
            <div key={skill.id}>
              <div>
                <span className={styles.category}>{skill.category}: </span>
                <span>{entries}</span>
              </div>
            </div>
          );
        })
      }
    </section>
  );
}
