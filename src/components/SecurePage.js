// import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const SecurePage = () => {
    // const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    // const callApi = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/secure', {
    //             headers: {
    //                 Authorization: `Bearer ${keycloak.token}`
    //             }
    //         });
    //         const data = await response.text();
    //         alert(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div>
            <h1>Secure Page</h1>
            {/* <p>Welcome {keycloak.tokenParsed?.preferred_username}</p> */}
            {/* <button onClick={callApi}>Call Secure API</button> */}
            {/* <button onClick={() => keycloak.logout()}>Logout</button> */}
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
};

export default SecurePage;