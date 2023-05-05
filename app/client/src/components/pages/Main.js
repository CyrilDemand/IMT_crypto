import { Outlet, Link } from "react-router-dom";
import '../../styles/electeur.css';
import Nav from "../components2/Nav";

function Main() {
    return (
        <div className={"main"}>
            <Nav links={[{link:"/admin",title:"Administrateur"},{link:"/electeur",title:"Electeur"}]}></Nav>
            <h1 className={"mainTitle"}>Page d'accueil</h1>
        </div>


    );
}

export default Main;
