import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { AboutUs } from "../../core/components/AboutUs/AboutUs"

import { Header } from "../../core/components/Header/Header";
import { Footer } from "../../core/components/Footer/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus/*" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
