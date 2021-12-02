import { useState } from "react";
import Menu from "./Menu/Menu"
import ThemeBtn from "./ThemeBtn"
import Topbar from "./Topbar/Topbar"


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(<>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <ThemeBtn />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>)
}