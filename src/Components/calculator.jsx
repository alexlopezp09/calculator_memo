import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { KeyboardComponent } from "./keyboard";
import { MemoButton } from "./button";

const mathOperations = {
  "/": (x, y) => x / y,
  x: (x, y) => x * y,
  "-": (x, y) => x - y,
  "+": (x, y) => x + y,
  "%": (x) => x / 100,
};

export const Calculator = () => {
  const [state, setState] = useState(1);

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

  // function changeSign() {
  //   if (num > 0) {
  //     setNum(-num);
  //   } else {
  //     setNum(Math.abs(num));
  //   }
  // }

  const setOnClick = (e) => setClickedNumber(e.target.value);

  const clearScreen = () => {
    setNumberContainer([]);
    setDisplayNumber(null);
    setOperator(null);
  };

  const child = useMemo(() => {
    return <MemoButton value={2} className="gray" />;
  }, []);

  const setOnClickNumber = (e) => setClickedNumber(e.target.value);
  const operatorHandler = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
  };

  const keyboardValues = [
    {
      value: "AC",
      color: "undefined",
      action: () => clearScreen(),
    },
    {
      value: "+/-",
      color: "undefined",
      action: operatorHandler,
    },
    {
      value: "%",
      color: "undefined",
      action: operatorHandler,
    },
    {
      value: "/",
      color: "organge",
      action: operatorHandler,
    },
    {
      value: "7",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "8",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "9",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "x",
      color: "orange",
      action: operatorHandler,
    },
    {
      value: "4",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "5",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "6",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "-",
      color: "orange",
      action: operatorHandler,
    },
    {
      value: "1",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "2",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "3",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "+",
      color: "orange",
      action: operatorHandler,
    },
    {
      value: "0",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "k",
      color: "novisible",
      action: undefined,
    },
    {
      value: ".",
      color: "grey",
      action: setOnClickNumber,
    },
    {
      value: "=",
      color: "orange",
      action: () => {
        console.log(setTriggerCalculation);
        setTriggerCalculation((prev) => !prev);
      },
    },
  ];

  const memoisedKeyboard = useMemo(() => {
    {
      return keyboardValues.map(({ value, color, action }) => (
        <MemoButton value={value} className={color} onClick={action} />
      ));
    }
  }, []);

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <button onClick={() => setState(state + 1)}>
          {state + " renders"}
        </button>
        <div className="wrapper">
          <Box m={12} />
          <h1 className="resultado">
            {displayNumber || numberContainer[2] || 0}
          </h1>
          <KeyboardComponent
            setOperator={setOperator}
            clearScreen={clearScreen}
            clickedNumber={setOnClick}
            triggerCalculation={setTriggerCalculation}
          >
            <>{memoisedKeyboard}</>
          </KeyboardComponent>
        </div>
      </Container>
    </div>
  );
};
