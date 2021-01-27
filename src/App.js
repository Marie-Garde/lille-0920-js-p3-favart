import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";

import HeaderTop from "./components/HeaderTop";
import ClientPage from "./components/ClientPage";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import ProfilePage from "./components/ProfilPage";
import Connection from "./components/Connection";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/clientpage" component={ClientPage} />
        <Route exact path="/">
          <Connection setToken={setToken} />
        </Route>

        <Route exact path="/sommaire" component={Sommaire} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/connexion" component={Connection} />
        <Route path="/ilsetelles" component={IlsEtElles} />
        <Route path="/action" component={Action} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/DisplayClient" component={DisplayClient} />
      </Switch>
    </div>
  );
}
