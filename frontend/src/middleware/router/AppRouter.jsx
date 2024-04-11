import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { AboutUs } from "../../core/components/AboutUs/AboutUs"
import { Header } from "../../core/components/Header/Header";
import { Footer } from "../../core/components/Footer/Footer";
import { Contact } from "../../core/components/Contact/Contact";
import { WhatDoWeDo } from "../../core/components/WhatDoWeDo/WhatDoWeDo"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus/*" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatdowedo/*" element={<WhatDoWeDo />} />
      </Routes>
    </BrowserRouter>
  );
};
