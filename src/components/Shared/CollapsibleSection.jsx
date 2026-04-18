import { useState } from "react";
import { ChevronUp, ChevronDown } from "@boxicons/react";
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
          icon={isOpen ? <ChevronUp /> : <ChevronDown />}
          onClick={() => setIsOpen(prev => !prev)
          }
        />
      </header>

      {
        isOpen && (
          <div className={styles.content}>
            {children}
          </div>
        )
      }
    </section >
  );
};
