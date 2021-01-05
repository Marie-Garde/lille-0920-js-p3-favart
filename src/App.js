import Connexion from "./components/Connexion";
import { Reset } from "styled-reset";
import HeaderBody from "./components/HeaderBody";
import HeaderMenu from "./components/HeaderMenu";
import Mainpage from "./components/Main";

export default function App() {
  return (
    <div>
      <Reset />
      <Connexion />
      <HeaderMenu />
      <HeaderBody />
      <Mainpage />
    </div>
  );
}
