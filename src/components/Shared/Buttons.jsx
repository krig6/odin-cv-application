import { Plus, ArrowToBottom } from "@boxicons/react";
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

export const IconButton = ({ icon, onClick, ...dragHandleProps }) => {
  return (
    <button
      className={`${styles.button} ${styles.icon}`}
      type="button"
      onClick={onClick}
      {...dragHandleProps}>
      {icon}
    </button>
  )
}

export const DownloadPdfButton = ({ onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${styles.download}`}
      type="button"
      onClick={onClick}
    >
      <ArrowToBottom />
      {children}
    </button>
  )
}
