import { Outlet, Link } from "react-router-dom";
import '../../styles/pages.css';
import '../../styles/global.css';
import Nav from "../components2/Nav";
import alexis from "../../../resources/alexis.png"
import cyril from "../../../resources/cyril.png"
import louis from "../../../resources/louis.png"
import lucas from "../../../resources/lucas.png"
import noe from "../../../resources/noe.png"
import thomas from "../../../resources/thomas.png"

function Main() {
    return (
        <div className={"main"}>
            <Nav links={[{link:"/admin",title:"Administrateur"},{link:"/electeur",title:"Electeur"}]}></Nav>
            <h1 className={"mainTitle"}>Page d'accueil</h1>
            <p>Ce projet a été réalisé par cette équipe de vainqueurs : </p>
            <div className={"equipe"}>

                <div>
                    <p>Noé : Front End</p>
                    <img src={noe}/>
                </div>
                <div>
                    <p>Cyril : Front End</p>
                    <img src={cyril}/>
                </div>
                <div>
                    <p>Alexis : Liaison entre le Back et le Front</p>
                    <img src={alexis}/>
                </div>
                <div>
                    <p>Lucas : Liaison entre le Back et le Front</p>
                    <img src={lucas}/>
                </div>
                <div>
                    <p>Thomas : Back End et Scrum Master</p>
                    <img src={thomas}/>
                </div>
                <div>
                    <p>Louis : Back End</p>
                    <img src={louis}/>
                </div>



            </div>


        </div>


    );
}

export default Main;
