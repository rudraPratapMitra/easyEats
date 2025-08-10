import Header from "./components/Header.jsx";
import {Outlet} from "react-router-dom";
import userContext from "./Utils/userContext";
import { useState,useEffect } from "react";
import{Provider} from "react-redux"
import appStore from "./Utils/appStore.js";
function App() {

   const [username,setUsername]=useState("defaut User")
    useEffect(() => {
  }, [username]);
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{username,setUsername}} >
    <div>
      <Header/>
      <Outlet/>
  </div>
  </userContext.Provider>
  </Provider>
  )
}

export default App;
