import { useState } from "react";
import { ChevronDown } from "@boxicons/react";
import { Apps } from "@boxicons/react";
import { IconButton } from "./Buttons";
import styles from "./CollapsibleSection.module.css"

export const CollapsibleSection = ({ title, children, defaultOpen = false, dragHandleProps }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className={styles.section}>
      <header
        className={`${styles.header} ${isOpen ? styles.open : ""}`}>
        {dragHandleProps && (
          <IconButton
            icon={<Apps />}
            {...dragHandleProps} />
        )}

        <h2 className={styles.title}>{title}</h2>

        <IconButton
          icon={
            <ChevronDown
              className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
            />
          }
          onClick={() => setIsOpen(prev => !prev)}
        />
      </header>

      <div className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}>
        {children}
      </div>
    </section >
  );
};
