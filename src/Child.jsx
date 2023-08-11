import React from "react";

const Child = (props) =>{
    return(
        <div>
            <h1>my personal details</h1>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.dept}</h2>
            <h2>{props.place}</h2>
        </div>
    )
}

export default Child;