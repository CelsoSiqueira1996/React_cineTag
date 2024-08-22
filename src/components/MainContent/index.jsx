import { Card } from "../Card";
import styles from "./MainContent.module.css";

export function MainContent({ listaFilmes }) {
    return (
        <main className={styles.conteudo}>
            {listaFilmes.map((filme) => <Card key={filme.id} filme={filme} />)}
        </main>
    )
}