import React from "react";

export const ButtonSet3 = ({ dispatch }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 4 })}
      >
        4
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 5 })}
      >
        5
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 6 })}
      >
        6
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "OPERATION", payload: "-" })}
      >
        -
      </button>
    </>
  );
};
