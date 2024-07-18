import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { Contact } from "../../core/pages/Contact/Contact";
import { Layout } from "../../core/components/Layout/Layout";
import  BlogList  from "../../core/pages/Blog/BlogList";
import SingleBlog from "../../core/pages/Blog/SingleBlog";
import { AstaiForum } from "../../core/pages/AstaiForum/AstaiForum";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/astaiForum" element={<AstaiForum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogDetails/:id" element={<SingleBlog />} />
          <Route path="/blogList" element={<BlogList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
