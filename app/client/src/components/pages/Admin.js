import {Link} from "react-router-dom";

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
        </div>
    );
}

export default Admin;
