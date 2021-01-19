import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import Footer from "./components/Footer";
import Agissons from "./components/Agissons";
import Inscription from "./components/Inscription";
import { Switch, Route } from "react-router-dom";
import RessourcePage from "./components/RessourcePage";
import MainPage from "./components/Main";

export default function App() {
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/connexion" component={Connexion} />
        <Route path="/inscription" component={Inscription} />
      </Switch>
      <Footer />
    </div>
  );
}
