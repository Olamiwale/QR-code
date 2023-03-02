 import react, { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("0");
  const [evaluate, setEvaluate] = useState("0");


  const display = (number) => {
    if(expression === '0'){
      setExpression(number)
    }else{
      return setExpression(prev=> prev + number)
    }   
  };


  const clear = () => {
    setExpression("0");
    setEvaluate("0");
  };

  const answer = () => {
    setEvaluate(eval(expression));
    setExpression(prev => prev + '=')
  };

  const del = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setEvaluate("0");
  };

  const haddleDecimal = () =>{
    const numberExpression = expression.split('')
    const lastNumber = numberExpression[numberExpression.length - 1]

    if(!lastNumber.includes('.')){
      let expre = expression + '.'
      setExpression(expre)
    }
    
  }

  return (
    <div className="container">
      <div className="input">
        <div className="expression-input" id='display'>
          {expression}
        </div>
        <div className="answer-input" id='display' > {evaluate}</div> 
      </div>

      <div className="values">
        <div onClick={() => display("1")} id="one" className="btn">
          1
        </div>
        <div onClick={() => display("2")} id="two" className="btn">
          2
        </div>
        <div onClick={() => display("3")} id="three" className="btn">
          3
        </div>
        <div onClick={() => display("/")} id="divide" className="btn">
          /
        </div>
        <div onClick={() => display("4")} id="four" className="btn">
          4
        </div>

        <div onClick={() => display("5")} id="five" className="btn">
          5
        </div>
        <div onClick={() => display("6")} id="six" className="btn">
          6
        </div>
        <div onClick={() => display("+")} id="add" className="btn">
          +{" "}
        </div>
        <div onClick={() => display("7")} id="seven" className="btn">
          7{" "}
        </div>
        <div onClick={() => display("8")} id="eight" className="btn">
          8{" "}
        </div>

        <div onClick={() => display("9")} id="nine" className="btn">
          9{" "}
        </div>
        <div onClick={() => display("*")} id="multiply" className="btn">
          x
        </div>
        <div onClick={() => display("0")} id="zero" className="btn">
          0
        </div>

        <div onClick={haddleDecimal} id="decimal" className="btn">
          .
        </div>
        <div onClick={answer} id="equals" className="btn">
          =
        </div>
        <div onClick={() => display("-")} id="subtract" className="btn">
          -{" "}
        </div>
      </div>

      <div className="delete-clear">
        <div onClick={clear} id="clear-btn" className="btn">
          AC
        </div>
        <div onClick={del} className="btn" id="btn-delete">
          C
        </div>
      </div>
    </div>
  );
}

export default App;  