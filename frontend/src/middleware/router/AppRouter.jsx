import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { Contact } from "../../core/components/Contact/Contact";
import { Blog } from "../../core/pages/Blog/Blog";
import { Layout } from "../../core/components/Layout/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
