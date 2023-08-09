import React from "react";

export const LogicButton = ({ dispatch }) => {
  return (
    <>
      <button className="btn" onClick={() => dispatch({ type: "CUT" })}>
        C
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "OPERATION", payload: "%" })}
      >
        %
      </button>
      <button className="btn" onClick={() => dispatch({ type: "BACK" })}>
        BACK
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "OPERATION", payload: "/" })}
      >
        /
      </button>
    </>
  );
};
