import Header from "./components/Header.jsx";
import {Outlet} from "react-router-dom";
import userContext from "./Utils/userContext";
function App() {
  const user={username:"Rudra"}
  return (
    <div>
    <userContext.Provider value={user} >
      <Header/>
      <Outlet/>
    </userContext.Provider>

  </div>
  )
}

export default App;
