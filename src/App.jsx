//import Intro from "./Pages/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" ? <Header /> : null}
      <Outlet />
      {location.pathname !== "/" ? <Footer /> : null}
    </>
  );
}

export default App;
