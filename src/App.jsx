import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Children from "./Children";
import Grandchildren from "./Grandchildren";
import { AppContextProvider, useAppContext } from "./Context/AppContext";
import Progress from "./Progress";
import Checkbox from "./Checkbox";
import Check from "./Check";
import Contactform from "./Contactform";
import PublicHoliday from "./PublicHoliday";


function App() {
  //const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(0);
     const {
      cartCount, setCartCount
    } = useAppContext();
    let [progress,setprogress]=useState(0);

  let property = {
    name: "vipan",
    class: "5th"
  }

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
    {/* <div>This is parent {cartCount} </div>
    
    <button style={{color:"red", background: "black" }} onClick={()=>{setCartCount(cartCount+1)}} >  Click Me</button>
      <Children /> <br /> <br />


     <div > <input type="text" onChange={(e)=>{setprogress(e.target.value)}} />

     </div> */}
      {/* <Progress progress= {progress} /> */}
     
      {/* <Check/> */}
      {/* <Contactform/> */}
      <PublicHoliday/>

    </>
  );
}

export default App;
