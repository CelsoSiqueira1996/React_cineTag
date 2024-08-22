import { MenuLink } from "../MenuLink";

export function Menu() {
    return (
        <nav>
            <MenuLink to='/'>
                Home
            </MenuLink>
            <MenuLink to='/favoritos'>
                Favoritos
            </MenuLink>
        </nav>
    )
}