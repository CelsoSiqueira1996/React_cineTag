import { useFavoritarContext } from "../../hooks/useFavoritarContext";
import styles from "./Card.module.css"
import  iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

export function Card({ filme }) {
    const { favoritos, alterarFavorito } = useFavoritarContext();
    const ehFavorito = favoritos.some((favorito) => favorito.id === filme.id);
    const iconeFavorito = ehFavorito? iconeDesfavoritar : iconeFavoritar;

    return (
        <figure className={styles.card_filme}>
            <Link to={`/player/${filme.id}`} className={styles.link}>
                <img src={filme.capa} alt={`Capa do filme ${filme.titulo}`}/>
            </Link>
            <figcaption>
                <h2>{filme.titulo}</h2>
                <img 
                    src={iconeFavorito} 
                    alt="Icone de favoritar" 
                    className={styles.favoritar}
                    onClick={() => alterarFavorito(filme)}
                />
            </figcaption>
        </figure>

    )
}
