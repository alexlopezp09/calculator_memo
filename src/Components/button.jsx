import React from "react";

export const Button = ({ className, onClick, value, children, style = {} }) => {
  console.log("Rendering a button");
  // Challange 1
  // Avoid re-render all buttons since they dont
  // Change from props.
  return (
    <button style={style} className={className} onClick={onClick} value={value}>
      {children}
    </button>
  );
};
