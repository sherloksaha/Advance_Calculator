import React from "react";

export const ButtonSet5 = ({ dispatch }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 1 })}
      >
        1
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 2 })}
      >
        2
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: "00" })}
      >
        00
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "OPERATION", payload: "+" })}
      >
        +
      </button>
    </>
  );
};
