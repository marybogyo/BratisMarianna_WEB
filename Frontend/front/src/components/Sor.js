import React from "react";
export default function Sor({adat}){

    return(
        <tr className="sorok">
            <td>{adat.angol}</td>
            <td>{adat.magyar}</td>
            <td>{adat.temaId}</td>
            
        </tr>
    )
}