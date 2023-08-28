import React from "react";

const Task2 = () =>{
    return(
        <>
        {data1.map((item)=>{
            return(
                <ul>
                    <li>min_position :{item.min_position}</li>
                    <li>has_more_items :{item.has_more_items}</li>
                    <li>items_html :{item.items_html}</li>
                    <li>new_latent_count :{item.new_latent_count}</li>
                    <li>data: {item.data.map((item1)=>{
                        return(
                            <ul>
                                <li>length :{item1.length}</li>
                                <li>text :{item1.text}</li>
                            </ul>
                        )
                    })}</li>
                    <li>numericalArray:{item.numericalArray}</li>
                    <li>StringArray: {item.StringArray}</li>
                    <li>multipleTypesArray: {item.multipleTypesArray}</li>
                    <li>objArray: {item.objArray.map((item2)=>{
                        return(
                            <ul>
                                <li>class:{item2.class}</li>
                                <li>age:{item2.age}</li>
                            </ul>
                        )
                    })}</li>
                </ul>
            )
        })}   
        </>
    )
}
export default Task2;