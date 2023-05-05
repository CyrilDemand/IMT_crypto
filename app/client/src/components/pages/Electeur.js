import {Link} from "react-router-dom";
import WhiteList from "../components2/WhiteList";
import EventListVote from "../components2/EventListVote";
import EventList from "../components2/EventList";
import Nav from "../components2/Nav";

function Electeur() {
    return (
        <div className={"electeur"}>
            <Nav links={[{link:"/",title:"Page d'acceuil"},{link:"/admin",title:"Administrateur"}]}></Nav>
            <h1 className={"electeurTitle"}>Electeur</h1>

            <EventListVote></EventListVote>
            <EventList admin={false}></EventList>
        </div>
    );
}

export default Electeur;
