import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";

import HeaderTop from "./components/HeaderTop";
import ClientPage from "./components/ClientPage";
import Connexion from "./components/Connection";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import ProfilePage from "./components/ProfilPage";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Inscription />
    </div>
  );
}
