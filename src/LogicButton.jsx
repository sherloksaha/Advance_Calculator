import React from 'react'

export const LogicButton = ({dispatch}) => {
  return (
    <>
        <button onClick={()=>dispatch({type:"CUT"})}>C</button>
        <button disabled>%</button>
        <button disabled>BACK</button>
        <button onClick={()=>dispatch({type:"OPERATION",payload:'/'})}>/</button>
    </>
  )
}
