import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {
const [menuClicked,setMenuClicked] = useState("");
  const onClickHandler = (e) =>{
    e.preventDefault();
    setMenuClicked(e.currentTarget.textContent);
    console.log(e.currentTarget.textContent);
  }
  const value = {
    menuClicked,
    onClickHandler
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );

};

export const useMenuContext = () => {
    return useContext(Context);
  };