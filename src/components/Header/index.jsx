import { Menu } from "../Menu";
import logo from "./logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <img src={logo} alt='Logo do cineTag' />
            </Link>
            <Menu />
        </header>
    )
}