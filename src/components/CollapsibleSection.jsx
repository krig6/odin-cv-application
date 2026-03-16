import { useState } from "react";
import { ChevronUp, ChevronDown } from "@boxicons/react";

export const CollapsibleSection = ({
  title,
  children,
  defaultOpen = false,
  dragHandleProps,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="collapsible-section">
      <div className="collapsible-section__header">
        <div className="collapsible-section__drag-handle" {...dragHandleProps}>
          <span></span><span></span>
          <span></span><span></span>
          <span></span><span></span>
        </div>

        <h2 className="collapsible-section__title">{title}</h2>

        <div
          className="collapsible-section__chevron"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="collapsible-section__content">{children}</div>
      )}
    </div>
  );
};
