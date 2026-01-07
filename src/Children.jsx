import React from 'react'
import Grandchildren from './Grandchildren'
import { AppContextProvider, useAppContext } from "./Context/AppContext";

const Children = (props) => {

   const {
      cartCount
    } = useAppContext();
 
  return (
    <div>This is NavBar and i am updating cart here
    
    {cartCount}
<Grandchildren/> 
    </div>
    
  )
}

export default Children