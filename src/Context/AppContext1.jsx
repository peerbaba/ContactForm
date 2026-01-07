import { Children, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = () => createContext(null);
export const AppContextProvider = ({ Children }) => {
  const Navigate = useNavigate();
  const value = {};
  return <AppContextProvider value={value}>{Children}</AppContextProvider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// import { Children, createContext,useContext } from "react";
// import { useNavigate } from "react-router-dom";

// export const AppContext =()=> createContext(null)
// export const AppContextProvider=({Children}) =>{
//     const navigate = useNavigate()

//     const value = {
//       navigate,

//     }
// return <AppContext.Provider value={value}>{Children}</AppContext.Provider>

// }
// export const useAppContext=()=>{
//     return useContext(AppContext);
// };
