import React, { useCallback, useEffect, useMemo } from "react";
import { render } from "react-dom";
import { Button, MemoButton } from "./button";
export const KeyboardComponent = ({
  setOperator,
  clearScreen,
  clickedNumber,
  triggerCalculation,
  children,
}) => {
  useEffect(() => {
    return () => {
      console.log("desmontando keyboard");
    };
  }, []);

  function clear() {
    // Challenge 3 debug
    // Do any operation, clear it, and click on =
    // It keeps doing prev operation
    clearScreen();
    console.log("clearing");
  }

  // Memoizing in keyboard
  // const child = useMemo(() => {
  //   return <MemoButton value={3} className="gray" />;
  // }, []);

  return <div>{<>{children}</>}</div>;
};

// export default React.memo(KeyboardComponent);
