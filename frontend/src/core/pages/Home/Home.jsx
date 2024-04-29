import "./Home.css";

import { RedMap } from "../../components/RedMap/RedMap";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { WhatDoWeDo } from "../../components/WhatDoWeDo/WhatDoWeDo";
import { NewsLetter } from "../../components/NewsLetter/NewsLetter";
import { Button } from "../../components/Button/Button";


export const Home = () => {
  return (
    <main className="home">
      <div className="welcomeMenssage">Bienvenidxs a AsturiasAi by SpainAi</div>
      <RedMap />
      <AboutUs />
      <WhatDoWeDo />
      <NewsLetter />
      <Button />
    </main>
  )
}