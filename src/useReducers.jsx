import { useReducer } from "react";
const initialState = {
  currentVal: "",
  PrevVal: "",
  currentOp: "",
};

function LogicCal(n2, n1, operator) {
  switch (operator) {
    case "*":
      return +n1 * +n2;
    case "+":
      return +n1 + +n2;
    case "-":
      return +n1 - +n2;
    case "/":
      return +n1 / +n2;
    case "%":
      return +n1 % +n2;
    default:
      return n1;
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case "BACK":
      if (state.currentVal !== "") {
        return {
          ...state,
          currentVal:
            String(state.currentVal)?.slice(0, state?.currentVal?.length - 1) ||
            "",
        };
      } else if (state.currentOp !== "") {
        return {
          ...state,
          currentOp: "",
          currentVal: String(state.PrevVal),
          PrevVal: "",
        };
      } else if (state.PrevVal !== "") {
        return {
          ...state,
          PrevVal:
            String(state.PrevVal).slice(0, state?.PrevVal.length - 1) || "",
        };
      } else return { ...initialState };
    case "NUMBER":
      if (!state.currentVal && action.payload == "0") return { ...state };
      return { ...state, currentVal: state.currentVal + action.payload };
    case "OPERATION":
      if (!state.currentVal) return { ...state };
      if (state.currentOp) {
        let res = LogicCal(state.currentVal, state.PrevVal, state.currentOp);
        return {
          ...state,
          PrevVal: String(res),
          currentOp: action.payload,
          currentVal: "",
        };
      }
      return {
        ...state,
        currentOp: action.payload,
        PrevVal: state.currentVal,
        currentVal: "",
      };
    case "result":
      let c = LogicCal(state.currentVal, state.PrevVal, state.currentOp);
      return { ...state, currentOp: "", currentVal: c, PrevVal: "" };
    case "CUT":
      return { ...initialState };
    case "DEC":
      if (!state.currentVal) return { ...state };
      if (state.currentVal.includes(action.payload)) return { ...state };
      return { ...state, currentVal: state.currentVal + action.payload };
    default:
      return state;
  }
};
export const useReducers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
