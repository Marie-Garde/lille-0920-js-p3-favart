import Connexion from "./components/Connexion";
import { Reset } from "styled-reset";
import HeaderMenu from "./components/HeaderMenu";
import Mainpage from "./components/Main";

export default function App() {
  return (
    <div>
      <Reset />
      <Connexion />
      <HeaderMenu />
      <Mainpage />
    </div>
  );
}
