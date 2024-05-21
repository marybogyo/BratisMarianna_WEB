import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Valaszt(){
    const [temak, setTemak] = useState("valassz");
    const {temaLista} = useAdatContext();

    const handleValasztChange = (event)=>{
        setTemak(event.target.value);
    }

    return(
        <select className="select"
                id="valaszt"
                name="valaszt"
                value={temak}
                onChange={handleValasztChange}
                >
                <option value="valassz">Válassz ténát!</option>
                {temaLista.length > 0 && temaLista.map((element)=>{
                    <option key={element.id} value={element.temanev}></option>
                })}
            
        </select>
    )
}