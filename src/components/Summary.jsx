import { CollapsibleSection } from "./CollapsibleSection"

export const Summary = () => {
  return (
    <div className="summary">
      <CollapsibleSection title="Summary">
        <div className="summary__field">
          <textarea className="summary__input" id="summary-text" rows={5} placeholder="Passionate software engineer with experience in building web applications using React, Node.js, and modern front-end technologies"></textarea>
        </div>
      </CollapsibleSection>
    </div>
  )
}
