import {useState} from "react";
import {Link} from "react-router-dom";

function Nav({links}){
    return(
        <header className={"header"}>
            <h1 className={"headerTitle"}>Système de votes</h1>
            <nav className={"navbar"}>
                <ul>
                    {links.map((link) => (
                        <li>
                            <Link to={link.link}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav