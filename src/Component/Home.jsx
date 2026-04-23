import React from 'react'
import { use } from 'react';

import { BioContext } from '../Hooks'

export const Home = () => {

    //const {myName,myAge}=useContext(BioContext);
    //const {myName,myAge}=useBioContext();
   

    let myName,myAge;

    const newhook=true;

    if (newhook) {
       ({myName,myAge}=use(BioContext));
      
    }
  return (
    <>
    <h1>Hello Home page {myName}.{myAge}</h1>
    
    </>
  )
}
