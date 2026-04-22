import styles from "./InputField.module.css"

export const InputField = ({ id, value, label, onChange, placeholder, autoComplete, inputMode, pattern, type = "text", className, rows }) => {

  const commonProps = {
    id,
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
          className={styles.textarea}
          rows={rows}
        />
      ) :
        <input
          {...commonProps}
          autoComplete={autoComplete}
          inputMode={inputMode}
          pattern={pattern}
          className={styles.input}
        />
      }
    </div>
  )
}
