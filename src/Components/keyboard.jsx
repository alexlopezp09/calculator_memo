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

   const keyboardValues = [
     {
       value: 'AC',
       color: 'undefined',
       action: clear
     },
     {
      value: '+/-',
      color: 'undefined',
      action: operatorHandler
     },
     {
      value: '%',
      color: 'undefined',
      action:operatorHandler 
    },
    {
      value: '/',
      color: 'organge',
      action:operatorHandler 
    },
    {
      value: '7',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '8',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '9',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: 'x',
      color: 'orange',
      action:operatorHandler 
    },
    {
      value: '4',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '5',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '6',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '-',
      color: 'orange',
      action:operatorHandler 
    },
    {
      value: '1',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '2',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '3',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: '+',
      color: 'orange',
      action:operatorHandler 
    },
    {
      value: '0',
      color: 'grey',
      action:clickedNumber 
    },
    {
      value: 'k',
      color: 'novisible',
      action: undefined 
    },
    {
      value: '.',
      color: 'grey',
      action: clickedNumber 
    },
    {
      value: '=',
      color: 'orange',
      action: () => {
        triggerCalculation((prev) => !prev);
      } 
    },
   ] 


  return (
    <>
      {keyboardValues.map(({value, color, action})=>{
        return  <MemoButton value={value} className={color} onClick={action}/>
      })}

    </>
  );
};

export default React.memo(KeyboardComponent);
