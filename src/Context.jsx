import { createContext, useState} from "react";
export const themeContext = createContext();

export const ThemeProvider = (props) => {
  const [isNightMode,setIsNightMode] = useState(false);

  return (
    <themeContext.Provider value={{setIsNightMode,isNightMode}}>{props.children}</themeContext.Provider>
  )

};

