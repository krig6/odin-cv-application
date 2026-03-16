export const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__field">
        <label className="summary__label" htmlFor="summary-text">Summary</label>
        <textarea className="summary__input" id="summary-text" rows={5} placeholder="Passionate software engineer with experience in building web applications using React, Node.js, and modern front-end technologies"></textarea>
      </div>
    </div>
  )
}
