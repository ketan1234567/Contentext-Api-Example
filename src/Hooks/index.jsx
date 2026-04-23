import { createContext, use } from "react";

export const BioContext= createContext();


export const BioProvider=({children})=>{
    const myName="Ketan";
    const  myAge=30;
    return <BioContext.Provider value={{myName,myAge}}>
{children}
    </BioContext.Provider>

};

//Custom Hooks

export const useBioContext=()=>{
    const  context=use(BioContext);
    return context;

}
