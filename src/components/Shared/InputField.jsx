export const InputField = ({ id, value, label, onChange }) => {
  return (
    <div className="input__field">
      <label htmlFor={id} className="input__label">{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
