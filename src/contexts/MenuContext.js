import { useState, createContext } from "react";

export const DisplayMenu = createContext();

export default function Provider({ children }){
    const [menu, setMenu]  = useState(false);

    return(
        <DisplayMenu.Provider value={{menu, setMenu}}>
            {children}
        </DisplayMenu.Provider>
    )
}