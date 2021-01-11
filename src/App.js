import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import Mainpage from "./components/header/HeaderBody01";
import Footer from "./components/Footer";
import Agissons from "./components/Agissons";
import PageInscription from "./components/PageInscription";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/inscription" component={PageInscription} />
      </Switch>
    </div>
  );
}
