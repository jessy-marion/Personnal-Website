import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Intro from "./Pages/Intro/Intro";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CV from "./Pages/CV/CV";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
//import Error from "./Pages/Error/Error";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={"/"} element={<Intro />}></Route>
      </Routes>
      <Header />
      <Routes>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/cv"} element={<CV />}></Route>
        <Route path={"/portfolio"} element={<Portfolio />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
