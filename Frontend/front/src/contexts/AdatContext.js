import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AdatContext = createContext();
export const AdatProvider = ({children})=>{
    const [temaLista, setTemaLista] = useState([]);
    const [szavakLista, setSzavakLista] = useState([]);
    

    
    const getLista = async(vegpont, callBack) =>{
        const{data} = await axios.get(vegpont);
        callBack(data);
    }
    useEffect(()=>{
        getLista('api/szavak', setSzavakLista);
        getLista('api/tema', setTemaLista);
    }, []);
    return (
        <AdatContext.Provider value={{temaLista, szavakLista}}>
        {children}
        </AdatContext.Provider>
    )
}
export default function useAdatContext(){
    return useContext(AdatContext)
}