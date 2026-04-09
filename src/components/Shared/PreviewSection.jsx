import { useCvStore } from "../../store/CvStore"

export const PreviewSection = ({ config }) => {
  const items = useCvStore(state => state[config.storeKey])

  return items.length > 0
    ? (<section className="preview-section">
      <h2 className="preview-section__title">{config.title}</h2>

      {items
        .filter(item => (item[config.primary] ?? "").toString().trim() !== "")
        .map(item => (
          <div className="preview-section__item" key={item.id}>

            <div className="preview-section__item-header">
              <strong className="preview-section__item-title">
                {config.prefix && item[config.prefix]}
                {config.prefix && item[config.prefix] && item[config.primary] && ", "}
                {item[config.primary]}
              </strong>

              {config.secondary && (
                <span className="preview-section__item-meta">
                  {item[config.secondary]}
                </span>
              )}
            </div>

            {config.tertiary && (
              <span className="preview-section__item-subtext">
                {item[config.tertiary]}
              </span>
            )}

            {item.descriptions.length > 0 && (
              <ul className="preview-section__item-list">
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

            {config.footerFields && (
              <div className="preview-section__item-footer">
                {config.footerFields.map(field => (
                  <span key={field.key}>
                    {field.label}: {item[field.key]}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
    </section>
    ) : null
}
