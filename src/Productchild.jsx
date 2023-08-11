import React from "react";

const Productchild = (props) =>{
    return(
        <div>
            <div className="productchild">
                <img src={props.img}/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <h4>{props.price}</h4>
            </div>
        </div>
    )
}
export default Productchild;