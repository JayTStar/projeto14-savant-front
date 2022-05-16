import { createContext } from "react";

export const GenrePool = createContext();

export default function Provider({ children }){
    const genres = ["Aventura", "Ficção", "Autoajuda", "HQs e Mangás"];

    return(
        <GenrePool.Provider value={{genres}}>
            {children}
        </GenrePool.Provider>
    )
}