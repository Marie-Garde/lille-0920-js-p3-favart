import ClientPage from "./components/ClientPage";
import Connexion from "./components/Connection";
import HeaderTop from "./components/HeaderTop";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Footer from "./components/Footer";
import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import ActionPage from "./components/ActionPage";
import { Reset } from "styled-reset";
import RessourcePage from "./components/RessourcePage";
import RessourcePageExt from "./components/RessourceExtPage";
import RessourcesForm from "./components/UpdateRessourcesForm";

import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <RessourcesForm />
    </div>
  );
}
