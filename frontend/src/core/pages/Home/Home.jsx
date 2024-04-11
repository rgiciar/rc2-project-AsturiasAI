import { Header } from "../../components/Header/Header";
import { RedMap } from "../../components/RedMap/RedMap";
import { Footer } from "../../components/Footer/Footer";


export const Home = () => {
  return (
    <main className="home">
      <Header />
      <RedMap />
      <Footer />
    </main>
  )
}