export const AddButton = ({ text, onClick }) => {
  return (
    <button
      className="add__button"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
