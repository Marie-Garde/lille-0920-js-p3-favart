import { useState, useEffect } from "react";

import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import Mainpage from "./components/Main";
import Footer from "./components/Footer";
import Agissons from "./components/Agissons";
import Inscription from "./components/Inscription";

import { Switch, Route } from "react-router-dom";
import useForm from "./components/ConnexionLogin";
import ProfilPage from "./components/ProfilPage";

export default function App() {
  const [token, setToken] = useState("");
  console.log(token);
  return (
    <div>
      <Reset />
      <HeaderTop />
      <ProfilPage/>
      <Switch>
        <Route path="/clientpage" component={ClientPage} />
        <Route exact path="/">
          <Connexion setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
}
