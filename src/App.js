import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";



function App() {
  const Ctx = useContext(AuthContext)
  
  return (
    <React.Fragment>
        <MainHeader onLogout={Ctx.onLogout} />
        <main>
          {!Ctx.isLoggedIn && <Login />}
          {Ctx.isLoggedIn && <Home />}
        </main>
    </React.Fragment>
  );
}

export default App;
