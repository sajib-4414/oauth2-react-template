import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./components/HomePage";
import SecurePage from "./components/SecurePage";



// Initialize Keycloak once initKeycloak


function App() {
  try{
    return (
     
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                      path="/secure"
                      element={
                          <PrivateRoute>
                              <SecurePage />
                          </PrivateRoute>
                      }
                  />
              </Routes>
          </BrowserRouter>
     
  );
  }catch(error){
    console.error('Failed to initialize App', error);
  }
    
}

export default App;
