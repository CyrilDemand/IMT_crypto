import {Link} from "react-router-dom";
import WhiteList from "../components2/WhiteList";
import SessionListVote from "../components2/SessionListVote";

function Electeur() {
    return (
        <div>
            <h1>ELECTEUR</h1>
            <ul>
                <li>
                    <Link to="/admin">admin</Link>
                </li>
                <li>
                    <Link to="/">main</Link>
                </li>
            </ul>
            <SessionListVote></SessionListVote>
        </div>
    );
}

export default Electeur;
