import { useState } from "react";
import { ChevronUp, ChevronDown } from "@boxicons/react";

export const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="collapsible-section">
      <div className="collapsible-section__header" onClick={() => setIsOpen(prev => !prev)}>
        <h2 className="collapsible-section__title">{title}</h2>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && <div className="collapsible-section__content">{children}</div>}
    </div>
  )
}
