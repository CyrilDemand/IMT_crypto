import { Outlet, Link } from "react-router-dom";
import '../../styles/electeur.css';
import '../../styles/global.css';
import Nav from "../components2/Nav";
import alexis from "../../img/alexis.png"
import cyril from "../../img/cyril.png"
import louis from "../../img/louis.png"
import lucas from "../../img/lucas.png"
import noe from "../../img/noe.png"
import thomas from "../../img/thomas.png"

function Main() {
    return (
        <div className={"main"}>
            <Nav links={[{link:"/admin",title:"Administrateur"},{link:"/electeur",title:"Electeur"}]}></Nav>
            <h1 className={"mainTitle"}>Page d'accueil</h1>
            <div className={"equipe"}>
                <h2>Ce projet a été réalisé par cette équipe de vainqueurs : </h2>
                <img src={alexis}/>
                <img src={cyril}/>
                <img src={louis}/>
                <img src={lucas}/>
                <img src={noe}/>
                <img src={thomas}/>
            </div>


        </div>


    );
}

export default Main;
