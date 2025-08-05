import Header from "./components/Header.jsx";
import {Outlet} from "react-router-dom";
import userContext from "./Utils/userContext";
import { useState,useEffect } from "react";
function App() {

   const [username,setUsername]=useState("defaut User")
    useEffect(() => {
  }, [username]);
  return (
    <div>
    <userContext.Provider value={{username,setUsername}} >
      <Header/>
      <Outlet/>
    </userContext.Provider>

  </div>
  )
}

export default App;
