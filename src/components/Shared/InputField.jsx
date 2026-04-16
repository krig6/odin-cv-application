import styles from "./InputField.module.css"

export const InputField = ({ id, value, label, onChange, placeholder, autoComplete, inputMode, pattern, type = "text" }) => {

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
      />
    </div>
  )
}
