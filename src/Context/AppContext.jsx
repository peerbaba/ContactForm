import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

 

  const value = {
    cartCount,
    setCartCount,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
