import AuthService from "../config/AuthService";


const PrivateRoute = ({ children }) => {
    

    if (!AuthService.isLoggedIn()) {
        AuthService.doLogin();
        return null;
    }

    return children;
};

export default PrivateRoute;