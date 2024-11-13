
import { Link } from "react-router-dom";
import AuthService from "../config/AuthService";

const HomePage = () => {
    // const { keycloak } = useKeycloak();

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/secure">Go to Secure Page</Link>
            {/* {!keycloak.authenticated && (
                <button onClick={() => keycloak.login()}>Login</button>
            )} */}
            <p>
            {!AuthService.isLoggedIn() &&
                <button className="btn btn-lg btn-success" onClick={() => AuthService.doLogin()}>Login</button>
            }
            {AuthService.isLoggedIn() &&
                <button className="btn btn-lg btn-success" onClick={() => AuthService.doLogout()}>Logout</button>
            }
            </p>
        </div>
    );
};

export default HomePage;