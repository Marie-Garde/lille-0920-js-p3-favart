import { useState } from "react";

import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import Connexion from "./components/Connexion";
import HeaderTop from "./components/HeaderTop";
import { Switch, Route } from "react-router-dom";
export default function App() {
  const [token, setToken] = useState("");
  console.log(token);
  return (
    <div>
      <Reset />
      <HeaderTop />
      <Switch>
        <Route path="/clientpage" component={ClientPage} />
        <Route exact path="/">
          <Connexion setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
}
