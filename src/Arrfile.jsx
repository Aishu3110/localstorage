import React from "react";
import data from './data/demo.json';

const Arrfile = () =>{
    console.log(data);
    return(
        <table>
    {data.map((item)=>{
        return(<tr>
            <tr>WHO:{item.WHO}</tr>
            <td>WEEK:</td>{item.WEEK.map((item1)=>{
        return(<td>
            <tr>NUMBER:{item1.NUMBER}</tr>
            <tr>EXPENSE:</tr>{item1.EXPENSE.map((item2)=>{
                return (<tr>
                    <td>WHAT:{item2.WHAT}</td>
                    <td></td>AMOUNT:{item2.AMOUNT}
                </tr>
                )
            })}
        </td>)
    })}
        </tr>)
    })}
</table>    )

};
export default Arrfile;

