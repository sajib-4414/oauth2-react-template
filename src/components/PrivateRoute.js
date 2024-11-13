

const PrivateRoute = ({ children }) => {
    // const { keycloak } = useKeycloak();

    // if (!keycloak.authenticated) {
    //     keycloak.login();
    //     return null;
    // }

    return children;
};

export default PrivateRoute;