import React from "react";
import data1 from './demo1.json';

const Task1 =() =>{
    console.log(data1)
    return(
        <>
        <h1>json data in list</h1>
        {data1.map((item)=>{
            return(
                <ul>
                    <li>_id :{item._id}</li>
                    <li>index :{item.index}</li>
                    <li>guid :{item.guid}</li>
                    <li>isActive :{item.isActive}</li>
                    <li>balance :{item.balance}</li>
                    <li>picture :{item.picture}</li>
                    <li>age :{item.age}</li>
                    <li>eyeColor :{item.eyeColor}</li>
                    <li>name :{item.name}</li>
                    <li>gender :{item.gender}</li>
                    <li>company :{item.company}</li>
                    <li>email :{item.email}</li>
                    <li>phone :{item.phone}</li>
                    <li>addres :{item.address}</li>
                    <li>about :{item.about}</li>
                    <li>registered :{item.registered}</li>
                    <li>latitude :{item.latitude}</li>
                    <li>longitude :{item.longitude}</li>
                    <li>tags :{item.tags}</li>
                    <li>friends: {item.friends.map((item1)=>{
                        return(
                            <ul>
                                <li>id :{item1.id}</li>
                                <li>name :{item1.name}</li>
                            </ul>
                        )
                    })}</li>
                    <li>greeting:{item.greeting}</li>
                    <li>favoriteFruit: {item.favoriteFruit}</li>
                </ul>
            )
        })}       
        </>
    )
};
export default Task1;