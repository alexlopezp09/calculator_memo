import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import KeyboardComponent from "./keyboard";

const mathOperations = {
  "/": (x, y) => x / y,
  X: (x, y) => x * y,
  "-": (x, y) => x - y,
  "+": (x, y) => x + y,
  "%": (x) => x / 100,
};

export const Calculator = () => {
  const [numberContainer, setNumberContainer] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(null);
  const [operator, setOperator] = useState();
  const [triggerCalculation, setTriggerCalculation] = useState(false);
  //storing clicked number
  const [clickedNumber, setClickedNumber] = useState(null);

  console.log("rerendering");
  // Challenge 4 if numbers didn't change and theres no pending
  // operation, avoid recalculating.

  // useEffect(() => {
  //   if (operator === "%") {
  //     setNum(firstNum / 100);
  //   } else if (operator === "+/-") {
  //     if (num > 0) {
  //       setNum(-num);
  //     } else {
  //       setNum(Math.abs(num));
  //     }
  //   }
  // }, [operator, num, firstNum]);

  useEffect(() => {
    if (clickedNumber !== undefined && clickedNumber !== null) {
      setDisplayNumber((prev) => (prev ? prev + clickedNumber : clickedNumber));
      setClickedNumber(null);
    }
  }, [clickedNumber]);

  useEffect(() => {
    // Solo entra al darle click al igual
    if (operator && triggerCalculation) {
      const calculatedValue = mathOperations[operator](
        parseInt(numberContainer[1], 10),
        parseInt(displayNumber, 10)
      );
      setNumberContainer([null, null, calculatedValue]);
      setTriggerCalculation(false);
      setOperator(null);
      setDisplayNumber(null);
    } else if (operator && displayNumber && !numberContainer[1]) {
      setNumberContainer([null, displayNumber, null]);
      setDisplayNumber(null);
      if (operator === "%") {
        setTriggerCalculation(true);
      }
    }
  }, [triggerCalculation, operator, numberContainer, displayNumber]);

  // const changeNumber = (number) => {
  //   setDisplayNumber((prev) => (prev ? prev + number : number));
  // };

  // function changeSign() {
  //   if (num > 0) {
  //     setNum(-num);
  //   } else {
  //     setNum(Math.abs(num));
  //   }
  // }

  const clearScreen = () => {
    setNumberContainer([]);
    setDisplayNumber(null);
    setOperator(null);
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="resultado">
            {displayNumber || numberContainer[2] || 0}
          </h1>
          <KeyboardComponent
            setOperator={setOperator}
            clearScreen={clearScreen}
            clickedNumber={(e) => setClickedNumber(e.target.value)}
            triggerCalculation={setTriggerCalculation}
          />
        </div>
      </Container>
    </div>
  );
};
