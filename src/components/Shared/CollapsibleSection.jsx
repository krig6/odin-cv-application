import { useState } from "react";
import { ChevronUp, ChevronDown } from "@boxicons/react";
import { Apps } from "@boxicons/react";
import { IconButton } from "./Buttons";

export const CollapsibleSection = ({ title, children, defaultOpen = false, dragHandleProps }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="collapsible-section">
      <header className={`collapsible-section__header ${isOpen ? 'open' : ''}`}>
        {dragHandleProps && (
          <IconButton
            icon={<Apps />}
            {...dragHandleProps} />
        )}

        <h2 className="collapsible-section__title">{title}</h2>

        <IconButton
          icon={isOpen ? <ChevronUp /> : <ChevronDown />}
          onClick={() => setIsOpen(prev => !prev)}
        />
      </header>

      {isOpen && (
        <div className="collapsible-section__content">{children}</div>
      )}
    </section>
  );
};
