import Connexion from "./components/Connexion";
import { Reset } from "styled-reset";
import HeaderMenu from "./components/HeaderMenu";
import HeaderTop from "./components/HeaderTop";
import Mainpage from "./components/Main";

export default function App() {
  return (
    <div>
      <HeaderTop />
      <Reset />
      <Connexion />
      <HeaderMenu />
      <Mainpage />
    </div>
  );
}
