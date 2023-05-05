import {Link} from "react-router-dom";
import WhiteList from "../components2/WhiteList";

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
        </div>
    );
}

export default Admin;
