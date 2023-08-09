import React from "react";

export const ButtonSet2 = ({ dispatch }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 7 })}
      >
        7
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 8 })}
      >
        8
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 9 })}
      >
        9
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "OPERATION", payload: "*" })}
      >
        *
      </button>
    </>
  );
};
