import Connexion from "./components/Connexion";
import { Reset } from "styled-reset";
import HeaderMenu from "./components/HeaderMenu";
import Mainpage from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Reset />
      <Connexion />
      <HeaderMenu />
      <Mainpage />
      <Footer />
    </div>
  );
}
