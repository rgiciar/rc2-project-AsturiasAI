import { RedMap } from "../../components/RedMap/RedMap";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { WhatDoWeDo } from "../../components/WhatDoWeDo/WhatDoWeDo";
import { NewsLetter } from "../../components/NewsLetter/NewsLetter";


export const Home = () => {
  return (
    <main className="home">
      <RedMap />
      <AboutUs />
      <WhatDoWeDo />
      <NewsLetter />
      
    </main>
  )
}