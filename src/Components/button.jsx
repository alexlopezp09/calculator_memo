import React, { useEffect } from "react";

const Button = ({ className, onClick, value, children, style = {} }) => {
  console.log("Rendering a button");
  console.log(onClick?.toString(), "funcion");
  console.log("value", value);
  // Challange 1
  // Avoid re-render all buttons since they dont
  // Change from props.
  useEffect(() => {
    return () => {
      console.log("desmontando");
    };
  }, []);

  return (
    <button style={style} className={className} onClick={onClick} value={value}>
      {value}
    </button>
  );
};

export const MemoButton = React.memo(Button);
