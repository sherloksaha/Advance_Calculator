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
      <div >
        <input style={{width:'70%',height:'40px',marginTop:'10px', marginLeft:'20px'}} value={state.PrevVal + state.currentOp} />
      </div>
      <div>
        <input style={{width:'70%',height:'25px',marginTop:'10px', marginLeft:'20px'}} value={state.currentVal} />
      </div>
    <div style={{width:'70%',height:'auto', display:'grid', marginTop:'10px', marginLeft:'20px'}}>
    <div style={{ display: "flex" }}>
        <LogicButton dispatch={dispatch} />
      </div>
      <div style={{ display: "flex" }}>
        <ButtonSet2 dispatch={dispatch} />
      </div>
      <div style={{ display: "flex" }}>
        <ButtonSet3 dispatch={dispatch} />
      </div>

      <div style={{ display: "flex" }}>
        <ButtonSet5 dispatch={dispatch} />
      </div>
      <div style={{ display: "flex" }}>
        <ButtonSet4 dispatch={dispatch} />
      </div>
      
    </div>
      
    </div>
  );
}

export default App;
