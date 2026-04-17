import styles from "./InputField.module.css"

export const InputField = ({ id, value, label, onChange, placeholder, autoComplete, inputMode, pattern, type = "text", className, rows }) => {

  const commonProps = {
    id,
    className: styles.input,
    value,
    onChange: (e) => onChange(e.target.value),
    placeholder
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          {...commonProps}
          rows={rows}
        />
      ) :
        <input
          {...commonProps}
          autoComplete={autoComplete}
          inputMode={inputMode}
          pattern={pattern}
        />
      }
    </div>
  )
}
