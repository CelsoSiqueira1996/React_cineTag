import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export function MenuLink({ children, to }) {
    return (
        <NavLink 
            className={({ isActive }) => {
                return `${styles.link} ${isActive? styles['link-ativo'] : ''}`
            }}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}