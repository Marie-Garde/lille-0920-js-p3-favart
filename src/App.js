import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import Mainpage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";
import Footer from "./components/Footer";
import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import ActionPage from "./components/ActionPage";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route exact path="/sommaire" component={Sommaire} />
        <Route exact path="/" component={Mainpage} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/ilsetelles" component={IlsEtElles} />
        <Route path="/action" component={Action} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/action" component={ActionPage} />
        <Route path="/DisplayClient" component={DisplayClient} />
      </Switch>
    </div>
  );
}
