import { useNavigate } from "react-router-dom";
import styles from "./NaoEncontrada.module.css";
import { TiArrowBackOutline } from "react-icons/ti";

export function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <section className={styles.container}>
                <h2>Ops!</h2>
                <p>O conteúdo que você procura não foi encontrado!</p>
                <button onClick={() => navegar(-1)}><TiArrowBackOutline size={25}/>Voltar</button>
            </section>
        </>
    )
}