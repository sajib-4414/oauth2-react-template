// import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import AuthService from "../config/AuthService";
import _axios from "../axiosClient";

const SecurePage = () => {
    // const { keycloak } = useKeycloak();
    const navigate = useNavigate();

    const callApi = async () => {
        try {
            const response = await _axios.get('/secure');
            const data = await response.data;
            console.log("API Response:", data); 
            alert(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h1>Secure Page</h1>
            <p>Welcome {AuthService.getTokenParsed()?.preferred_username}</p>
            <button onClick={callApi}>Call Secure API</button>
            {/* <button onClick={() => keycloak.logout()}>Logout</button> */}
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
};

export default SecurePage;