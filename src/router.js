import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Intro from "./Pages/Intro/Intro";
import Home from "./Pages/Home/Home";
import CV from "./Pages/CV/CV";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cv",
        element: <CV />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);
