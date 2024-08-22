import { useContext } from "react";
import { FavoritarContext } from "../contexts/FavoritarContext";

export function useFavoritarContext() {
    const { favoritos, setFavoritos } = useContext(FavoritarContext);

    function alterarFavorito(filme) {
        const filmeEhFavorito = favoritos.some((filmeFavoritado) => filme.id === filmeFavoritado.id)
        if(filmeEhFavorito) {
            return setFavoritos(favoritos.filter((filmeFavoritado) => filmeFavoritado.id !== filme.id))
        } 
          
        return  setFavoritos([...favoritos, filme]);
    } 

    return {
        favoritos,
        alterarFavorito
    }
}