import "./Home.css";

import { RedMap } from "../../components/RedMap/RedMap";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { WhatDoWeDo } from "../../components/WhatDoWeDo/WhatDoWeDo";
import { NewsLetter } from "../../components/NewsLetter/NewsLetter";


export const Home = () => {
  return (
    <main className="home">
      <div className="welcomeMenssage">Bienvinidxs a AsturiasAi by SpainAi</div>
      <RedMap />
      <AboutUs />
      <WhatDoWeDo />
      <NewsLetter />
    </main>
  )
}