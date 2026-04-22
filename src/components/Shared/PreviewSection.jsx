import { useCvStore } from "../../store/CvStore"
import styles from "../CvBuilder/CvPreviews.module.css"

export const PreviewSection = ({ config }) => {
  const items = useCvStore(state => state[config.storeKey])
  const isProjects = config.secondary === "techStack"

  if (!items || items.length === 0) return null

  return (
    <section className={styles.section}>
      <header className={styles.sectionTitle}>
        <span>
          {config.title}
        </span>
      </header>

      <span className={styles.sectionDivider}></span>

      {items
        .filter(item => item[config.primary] && item[config.primary].trim() !== "")
        .map(item => (
          <div
            key={item.id}
            className={styles.section}
          >

            <div className={styles.spaceBetween}>
              <span className={styles.primary}>
                {config.prefix && item[config.prefix]}
                {config.prefix && item[config.prefix] && item[config.primary] && ", "}
                {item[config.primary]}
              </span>

              {config.secondary && (
                <span>
                  {item[config.secondary]}
                </span>
              )}
            </div>

            {config.tertiary && (
              <span>
                {item[config.tertiary]}
              </span>
            )}

            {item.descriptions.length > 0 && (
              <ul>
                {item.descriptions.map(desc => (
                  <li
                    key={desc.id}
                    className="preview-section__item-list-item"
                  >
                    {desc.text}
                  </li>
                ))}
              </ul>
            )}

            {config.fields && isProjects && (
              <div className={styles.projectLinks}>
                {config.fields.map(field => {
                  if (field.key === "techStack") return

                  return (
                    <div key={field.key}>
                      <span>
                        <a href={item[field.key]}>
                          {field.label}
                        </a>
                      </span>
                    </div>
                  )
                }
                )}
              </div>
            )}
          </div>
        ))
      }
    </section >
  )
}
