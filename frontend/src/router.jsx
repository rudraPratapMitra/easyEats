import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { useRouteError } from "react-router-dom";
import ResturantInfo from "./components/ResturantInfo.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"resturants/:resId",
        element:<ResturantInfo/>
      }
    ]
  }
]);

export default appRouter;