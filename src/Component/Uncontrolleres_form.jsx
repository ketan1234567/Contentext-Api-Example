import React, { useRef } from 'react'

export const Uncontrolleres_form = () => {

            const username = useRef();
        const password = useRef();

    const onSubmit=(e)=>{
        e.preventDefault();

  console.log(username.current.value,password.current.value);
  

    }
  return (
    <>
    <h1>Uncontrolleres_form</h1>
    <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={username}
          id="username"
         
        />
        <br/>

        <input
          type="text"
          name="lname"
         ref={password}
          id="password"
        />
        <br/>

        <button type="submit">Click</button>
      </form>

    
    
    </>
  )
}
