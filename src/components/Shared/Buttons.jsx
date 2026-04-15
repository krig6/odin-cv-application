import React from "react";
import { Plus } from "@boxicons/react";
import styles from "./Buttons.module.css"

export const AddButton = ({ children, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles.add}`}
      type="button"
      onClick={onClick}
    >
      <Plus />
      <span>{children}</span>
    </button>
  )
}

export const IconButton = React.forwardRef(({ icon, onClick, ...dragHandleProps }, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles.icon}`}
      type="button"
      onClick={onClick}
      {...dragHandleProps}>
      {icon}
    </button>
  )
})
