import { CollapsibleSection } from "./CollapsibleSection"
import { useSummary } from "../store/cvStore"

export const Summary = ({ dragHandleProps }) => {
  const setSummary = useSummary(state => state.setSummary)
  return (
    <div className="summary">
      <CollapsibleSection title="Summary" dragHandleProps={dragHandleProps}>
        <div className="summary__field">
          <textarea
            id="summary-text"
            className="summary__input"
            onChange={(e) => setSummary(e.target.value)}
            rows={5}
            placeholder="Passionate software engineer with experience in building web applications using React, Node.js, and modern front-end technologies">
          </textarea>
        </div>
      </CollapsibleSection>
    </div>
  )
}
