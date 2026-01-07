import React from 'react'
import { AppContextProvider, useAppContext } from "./Context/AppContext";



const Grandchildren = (props) => {

  const {
        cartCount,
        setCartCount
      } = useAppContext();
   
  return (
    <div>  Grandchildren {props.surname}
    
    <button style={{color:"red", background: "black" }} onClick={()=>{setCartCount(cartCount+2)}} >Click On Me</button>
    </div>
  )
}

export default Grandchildren