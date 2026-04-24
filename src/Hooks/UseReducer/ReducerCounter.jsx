import React, { useReducer } from 'react'

export const ReducerCounter = () => {


    const reducer=(state,action)=>{
     /// console.log(state,action);
      
     if (action.type=="INCREMENT") {
       return state+1
     }
         if (action.type=="DECREMENT") {
       return state-1
     }
      if (action.type=="RESET") {
       return state=0
     }



    };

    const [count,dispatch]=useReducer(reducer,0);
    //console.log(useReducer(reducer,0));
    


  return (
    <>
    <h1>Hello Reduer Hook:{count}</h1>

    <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})} >Decrement</button>
      <button onClick={()=>dispatch({type:"RESET"})} >Reset</button>
   </>
  )
}
