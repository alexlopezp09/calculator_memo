import React from "react";
import { MemoButton } from "./button";

const KeyboardComponent = ({
  setOperator,
  clearScreen,
  clickedNumber,
  triggerCalculation,
}) => {
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
  }

  function clear() {
    // Challenge 3 debug
    // Do any operation, clear it, and click on =
    // It keeps doing prev operation
    clearScreen();
    console.log("clearing");
    // forceUpdate();
  }

  return (
    <>
      <MemoButton value={"AC"} onClick={clear}>
        AC
      </MemoButton>
      <MemoButton onClick={operatorHandler} value={"+/-"}>
        +/-
      </MemoButton>
      <MemoButton onClick={operatorHandler} value={"%"}>
        %
      </MemoButton>
      {/* Challenge 2 Add pow functionality , replace percent*/}
      <MemoButton className="orange" onClick={operatorHandler} value={"/"}>
        /
      </MemoButton>
      {[7, 8, 9].map((value) => (
        <MemoButton className="grey" onClick={clickedNumber} value={value} />
      ))}
      <MemoButton className="orange" onClick={operatorHandler} value={"X"}>
        X
      </MemoButton>
      {[4, 5, 6].map((value) => (
        <MemoButton className="grey" onClick={clickedNumber} value={value} />
      ))}
      <MemoButton className="orange" onClick={operatorHandler} value={"-"}>
        -
      </MemoButton>
      {[1, 2, 3].map((value) => (
        <MemoButton className="grey" onClick={clickedNumber} value={value} />
      ))}
      <MemoButton className="orange" onClick={operatorHandler} value={"+"}>
        +
      </MemoButton>
      <MemoButton className="grey" onClick={clickedNumber} value={0}>
        0
      </MemoButton>
      <MemoButton style={{ visibility: "hidden" }}>k</MemoButton>{" "}
      <MemoButton className="grey" onClick={clickedNumber} value={"."}>
        ,
      </MemoButton>
      <MemoButton
        className="orange"
        onClick={() => {
          triggerCalculation((prev) => !prev);
        }}
        value={"="}
      >
        =
      </MemoButton>
    </>
  );
};

export default React.memo(KeyboardComponent);
