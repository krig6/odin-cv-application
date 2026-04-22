import { useCvStore } from "../../store/cvStore";
import { CollapsibleSection } from "../../shared/ui/CollapsibleSection";
import { InputField } from "../../shared/ui/InputField";

export const Summary = ({ dragHandleProps }) => {
  const currentSummary = useCvStore(state => state.summary)
  const setSummary = useCvStore(state => state.setSummary);

  return (
    <CollapsibleSection title="Summary" dragHandleProps={dragHandleProps}>
      <div className="summary__fields">
        <InputField
          id="summary-text"
          value={currentSummary}
          label="Summary"
          onChange={(value) => setSummary(value)}
          rows={5}
          type="textarea"
          placeholder="Results-driven software engineer with experience building responsive web applications using React, Node.js, and modern front-end technologies."
        />
      </div>
    </CollapsibleSection>
  );
};
