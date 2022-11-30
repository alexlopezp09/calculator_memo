import React, { useEffect } from "react";

export const MemoButton = ({ className, onClick, value, style = {} }) => {
  console.log("Rendering a button");
  console.log("value", value, className, onClick, value, style);
  // Challange 1
  // Avoid re-render all buttons since they dont
  // DONE
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

// export const MemoButton = React.memo(Button);
