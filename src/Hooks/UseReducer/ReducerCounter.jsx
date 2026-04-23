import React, { useReducer } from 'react'

export const ReducerCounter = () => {


    const reducer=(state,action)=>{};

    const [count,dispatch]=useReducer(reducer,0);
    console.log(useReducer(reducer,0));
    


  return (
    <>
    <h1>Hello Reduer Hook:{}</h1>

    <button>Increment</button>
      <button>Decrement</button>
   </>
  )
}
