import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../core/pages/Home/Home";
import { AboutUs } from "../../core/components/AboutUs/AboutUs"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus/*" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}