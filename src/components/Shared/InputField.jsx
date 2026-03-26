export const InputField = ({ id, value, label, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="input__label">{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
