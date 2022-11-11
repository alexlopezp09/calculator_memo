import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import KeyboardComponent from "./keyboard";

const mathOperations = {
  "/": (x, y) => x / y,
  X: (x, y) => x * y,
  "-": (x, y) => x - y,
  "+": (x, y) => x + y,
  "%": (x) => x / 100
};

export const Calculator = () => {
  const [numberContainer, setNumberContainer] = useState([]);
  const [tempNumber, setTempNumber] = useState(null);
  const [operator, setOperator] = useState();
  const [triggerCalculation, setTriggerCalculation] = useState(false);

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
    // Solo entra al darle click al igual
    if (operator && triggerCalculation) {
      const calculatedValue = mathOperations[operator](
        parseInt(numberContainer[1], 10),
        parseInt(tempNumber, 10)
      );
      setNumberContainer([null, null, calculatedValue]);
      setTriggerCalculation(false);
      setOperator(null);
      setTempNumber(null);
    } else if (operator && tempNumber && !numberContainer[1]) {
      setNumberContainer([null, tempNumber, null]);
      setTempNumber(null);
      if (operator === "%") {
        setTriggerCalculation(true);
      }
    }
  }, [triggerCalculation, operator, numberContainer, tempNumber]);

  const changeNumber = (e) => {
    let input = e.target.value;
    setTempNumber((prev) => (prev ? prev + input : input));
  };

  // function changeSign() {
  //   if (num > 0) {
  //     setNum(-num);
  //   } else {
  //     setNum(Math.abs(num));
  //   }
  // }

  const clearScreen = () => {
    setNumberContainer([]);
    setTempNumber(null);
    setOperator(null);
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="resultado">{tempNumber || numberContainer[2] || 0}</h1>
          <KeyboardComponent
            setOperator={setOperator}
            clearScreen={clearScreen}
            changeNumber={changeNumber}
            triggerCalculation={setTriggerCalculation}
          />
        </div>
      </Container>
    </div>
  );
};
