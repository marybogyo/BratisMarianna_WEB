import React, { useState } from "react";
import Sor from "./Sor";
import useAdatContext from "../contexts/AdatContext";

export default function Public(){
    const {szavakLista} = useAdatContext();
  


    return(
        <div className="container">

        <table className="table table-hover table-bordered table-striped">
        <thead>
        <tr className="fej">
            <th >ANGOL</th>
            <th>MAGYAR</th>
            <th>visszajelzés</th>
        </tr>
        </thead>
        <tbody>
             {szavakLista.map((element, index)=>{
                return <Sor adat={element} key={index}/>
             })}
        </tbody>
        </table>
        </div>
        )
}