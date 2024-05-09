import React, { useState } from "react";
import { Container, Screen, Prevoius, Current, Button } from "../Styles/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };
const allClearHandler=()=>{
  setCurrent('');
  setOperations('');
  setPrevoius('');
};
const chooseoperationhandler=(el)=>{
  if(current ==='')return
  if(prevoius!==''){
    let value=compute();
      setPrevoius(value)
    }else{
      setPrevoius(current)
    }
    setCurrent('')
    setOperations(el.target.getAttribute('data'))
  };

const compute=()=>{
  let result;
  let prevoiusNumber=parseFloat(prevoius)
  let currentNumber=parseFloat(current)
  if(isNaN(prevoiusNumber)|| isNaN(currentNumber))return
  switch(operations){
    case '÷' :
      result=prevoiusNumber/currentNumber;
      break;
      case '+' :
      result=prevoiusNumber+currentNumber;
      break;
      case 'x' :
      result=prevoiusNumber*currentNumber;
      break;
      case '-' :
      result=prevoiusNumber-currentNumber;
      break;
      default:return
  }
  return result;
};

const equalhandler=()=>{
  let value=compute()
  if(value===undefined||value==null)return
  setCurrent(value)
  setPrevoius('');
  setOperations('');
}
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {operations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} control onClick={allClearHandler}>
          AC
        </Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button data={"÷"} operation onClick={chooseoperationhandler}>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          {" "}
          9
        </Button>
        <Button data={"x"} operation onClick={chooseoperationhandler} >
          x
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={"+"} operation onClick={chooseoperationhandler} >
          +
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button data={"-"} operation onClick={chooseoperationhandler}>
          -
        </Button>
        <Button data={"."} onClick={appendValueHandler} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button gridSpan={2} equals onClick={equalhandler} >
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;