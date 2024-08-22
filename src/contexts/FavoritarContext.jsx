import { createContext, useState } from "react";

export const FavoritarContext = createContext();
FavoritarContext.displayName = "Favoritos";

export function FavoritarProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    return (
        <FavoritarContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritarContext.Provider>
    )
}