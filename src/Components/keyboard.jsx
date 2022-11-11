import React from "react";
import { Button } from "./button";

const KeyboardComponent = ({
  setOperator,
  clearScreen,
  changeNumber,
  triggerCalculation
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
    // forceUpdate();
  }
  return (
    <>
      <Button value={"AC"} onClick={clear}>
        AC
      </Button>
      <Button onClick={operatorHandler} value={"+/-"}>
        +/-
      </Button>
      <Button onClick={operatorHandler} value={"%"}>
        %
      </Button>
      {/* Challenge 2 Add pow functionality , replace percent*/}
      <Button className="orange" onClick={operatorHandler} value={"/"}>
        /
      </Button>
      <Button className="grey" onClick={changeNumber} value={7}>
        7
      </Button>
      <Button className="grey" onClick={changeNumber} value={8}>
        8
      </Button>
      <Button className="grey" onClick={changeNumber} value={9}>
        9
      </Button>
      <Button className="orange" onClick={operatorHandler} value={"X"}>
        X
      </Button>
      <Button className="grey" onClick={changeNumber} value={4}>
        4
      </Button>
      <Button className="grey" onClick={changeNumber} value={5}>
        5
      </Button>
      <Button className="grey" onClick={changeNumber} value={6}>
        6
      </Button>
      <Button className="orange" onClick={operatorHandler} value={"-"}>
        -
      </Button>
      <Button className="grey" onClick={changeNumber} value={1}>
        1
      </Button>
      <Button className="grey" onClick={changeNumber} value={2}>
        2
      </Button>
      <Button className="grey" onClick={changeNumber} value={3}>
        3
      </Button>
      <Button className="orange" onClick={operatorHandler} value={"+"}>
        +
      </Button>
      <Button className="grey" onClick={changeNumber} value={0}>
        0
      </Button>
      <Button style={{ visibility: "hidden" }}>k</Button>{" "}
      <Button className="grey" onClick={changeNumber} value={"."}>
        ,
      </Button>
      <Button
        className="orange"
        onClick={() => {
          triggerCalculation((prev) => !prev);
        }}
        value={"="}
      >
        =
      </Button>
    </>
  );
};

export default React.memo(KeyboardComponent);
