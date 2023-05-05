import { Outlet, Link } from "react-router-dom";
import '../../styles/electeur.css';

function Main() {
    return (
        <div>
            <h1>main</h1>
            <ul>
                <li>
                    <Link to="/admin">admin</Link>
                </li>
                <li>
                    <Link to="/electeur">electeur</Link>
                </li>
            </ul>
        </div>
    );
}

export default Main;
