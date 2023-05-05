import {Link} from "react-router-dom";

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
        </div>
    );
}

export default Electeur;
