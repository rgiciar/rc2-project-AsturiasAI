import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <div className="contentPage">
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};
