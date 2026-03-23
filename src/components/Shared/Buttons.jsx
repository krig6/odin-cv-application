import React from "react";
import { Plus } from "@boxicons/react";

export const AddButton = ({ children, onClick }) => {
  return (
    <button
      className="add-button"
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
      className="icon-button"
      type="button"
      onClick={onClick}
      {...dragHandleProps}>
      {icon}
    </button>
  )
})
