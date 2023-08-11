import React from "react";
import Child from './Child';

const Parent = () =>{
    return(
        <div>
            <Child name={"aishu"} age={"22"} dept={"IT"} place={"tirupur"}/>
        </div>
    )
}

export default Parent;