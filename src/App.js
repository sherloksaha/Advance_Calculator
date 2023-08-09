import "./App.css";
import { ButtonSet2 } from "./ButtonSet2";
import { ButtonSet3 } from "./ButtonSet3";
import { ButtonSet4 } from "./ButtonSet4";
import { ButtonSet5 } from "./ButtonSet5";
import { LogicButton } from "./LogicButton";
import { useReducers } from "./useReducers";

function App() {
  const [state, dispatch] = useReducers();
  return (
    <div className="maindiv">
      <h3>CALCULATOR</h3>
      <div>
        <input
          className="input1"
          value={state.PrevVal + state.currentOp}
          disabled
        />
      </div>
      <div>
        <input className="input2" value={state.currentVal} disabled />
      </div>
      <div style={{ width: "70%", height: "auto", marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <LogicButton dispatch={dispatch} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <ButtonSet2 dispatch={dispatch} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <ButtonSet3 dispatch={dispatch} />
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <ButtonSet5 dispatch={dispatch} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            paddingTop: "10px",
          }}
        >
          <ButtonSet4 dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
