import { CollapsibleSection } from "./Shared/CollapsibleSection";
import { useCvStore } from "../store/CvStore";

export const Summary = ({ dragHandleProps }) => {
  const currentSummary = useCvStore(state => state.summary)
  const setSummary = useCvStore(state => state.setSummary);

  return (
    <section className="summary">
      <CollapsibleSection title="Summary" dragHandleProps={dragHandleProps}>
        <div className="summary__fields">
          <div className="summary__field">
            <label className="input__label" htmlFor="summary-text">Summary</label>
            <textarea
              id="summary-text"
              className="summary__input"
              value={currentSummary}
              onChange={(e) => setSummary(e.target.value)}
              rows={5}
              placeholder="Passionate software engineer with experience in building web applications using React, Node.js, and modern front-end technologies."
            />
          </div>
        </div>
      </CollapsibleSection>
    </section>
  );
};
