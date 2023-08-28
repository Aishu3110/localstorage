// import React,{useState,useEffect} from 'react';

// import Parent from './Parent';
// import Product from './Product';
// import Arrfile from "./Arrfile";
import Task1 from "./data1/Task1";
// import Login from "./Login";

function App() {
  // const[countdown,setcountdown] = useState(0);
  // const[interval,setInterval]=useState(0);
  // useEffect(()=>{
  //   console.log("hai")
  // })

  // useEffect(()=>{
  //   console.log("hello")
  // },[countdown])

  // useEffect(()=>{
  //   console.log("aishu")
  // },[])

  // useEffect(()=>{
  //   const interval =setInterval(()=>{
  //     setcountdown(countdown+1)
  //   },1000);
  //   return() => clearInterval(interval);
  // })

  // function timeOut(){
  //   setTimeout(()=>{
  //     console.log("timeout seconds")
  //   },1000)
  // }
  return (
    <div>
    {/* <div>countdown value:{countdown}</div>
    <button onClick={()=>timeOut()}>Timeout</button> */}
<Task1/>
    </div>
  );
}

export default App;
