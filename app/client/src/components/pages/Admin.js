import {Link} from "react-router-dom";
import WhiteList from "../components2/WhiteList";
import SessionListAdmin from "../components2/SessionListAdmin";

function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <ul>
                <li>
                    <Link to="/">main</Link>
                </li>
                <li>
                    <Link to="/electeur">electeur</Link>
                </li>
            </ul>
            <WhiteList title={"WhiteList"}></WhiteList>
            <SessionListAdmin></SessionListAdmin>
        </div>
    );
}

export default Admin;
