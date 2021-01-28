import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import Mainpage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Projects from "./components/Projects";
import Logo from "./components/Logo"

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Projects />
      <Logo />
    </div>
  );
}
