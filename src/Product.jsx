import React from "react";
import Productchild from "./Productchild";
import './App.css';

const Product = () =>{
    const dress=[{img:"https://img.joomcdn.net/0a499367f8e7d1566c1eeeb2335ed5191ef35441_original.jpeg",
    name:"frog",
    desc:"Doll Dresses Evening Gown Clothes Lace Wedding Dress ",
    price:"5000"},
    {img:"https://img.joomcdn.net/0a499367f8e7d1566c1eeeb2335ed5191ef35441_original.jpeg",
    name:"frog",
    desc:"Doll Dresses Evening Gown Clothes Lace Wedding Dress ",
    price:"5000"},
    {img:"https://img.joomcdn.net/0a499367f8e7d1566c1eeeb2335ed5191ef35441_original.jpeg",
    name:"frog",
    desc:"Doll Dresses Evening Gown Clothes Lace Wedding Dress ",
    price:"5000"}]
    return(
        <>
        <div className="Product">
            <h1>DRESS</h1>        
        </div>
        <div className="Product1">
            {dress.map((e)=><Productchild img={e.img} name={e.name} desc={e.desc} price={e.price}/> )}
        </div>
        </>
    )
}
export default Product;