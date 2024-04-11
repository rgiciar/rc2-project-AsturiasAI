import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { Header } from "../../core/components/Header/Header";
import { Footer } from "../../core/components/Footer/Footer";
import { Contact } from "../../core/components/Contact/Contact";
import { Blog } from "../../core/pages/Blog/Blog";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
