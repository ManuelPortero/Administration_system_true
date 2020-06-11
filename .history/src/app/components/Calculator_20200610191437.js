import React, { useState } from "react";
import App from '../App';

export default class Customers extends Component   {


  render () {
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={e => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={e => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  
    }
}
