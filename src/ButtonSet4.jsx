import React from 'react'

export const ButtonSet4 = ({dispatch }) => {
  return (
    <>
        <button onClick={()=>dispatch({type:"NUMBER",payload:0})}>0</button>
        <button onClick={()=>dispatch({type:"DEC",payload:'.'})}>.</button>
        <button onClick={()=>dispatch({type:"NUMBER",payload:3})}>3</button>
        <button onClick={()=>dispatch({type:"result"})}>=</button>
    </>
  )
}
