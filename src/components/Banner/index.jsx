import styles from "./Banner.module.css";

export function Banner({ srcPath }) {
    return (
        <div className={styles.capa}>
            <img src={`/imagens/banner-${srcPath}.png`} alt="Banner da página."/>       
        </div>
    )
}