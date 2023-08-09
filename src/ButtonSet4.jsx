import React from "react";

export const ButtonSet4 = ({ dispatch }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 0 })}
      >
        0
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "DEC", payload: "." })}
      >
        <span style={{ fontSize: "20px" }}>.</span>
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "NUMBER", payload: 3 })}
      >
        3
      </button>
      <button className="btn" onClick={() => dispatch({ type: "result" })}>
        =
      </button>
    </>
  );
};
