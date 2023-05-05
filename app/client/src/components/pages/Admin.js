import {Link} from "react-router-dom";
import WhiteList from "../components2/WhiteList";
import EventAdd from "../components2/EventAdd";
import EventList from "../components2/EventList";
import Nav from "../components2/Nav";

function Admin() {
    return (
        <div className={"admin"}>
            <Nav links={[{link:"/",title:"Page d'acceuil"},{link:"/electeur",title:"Electeur"}]}></Nav>
            <h1 className={"adminTitle"}>Admin</h1>

            <WhiteList title={"WhiteList"}></WhiteList>
            <EventAdd></EventAdd>
            <EventList admin={true}></EventList>
        </div>
    );
}

export default Admin;
