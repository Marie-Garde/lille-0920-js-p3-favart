import ClientPage from "./components/ClientPage";
import { Reset } from "styled-reset";
import HeaderMenu from "./components/HeaderMenu";
import Mainpage from "./components/Main";


export default function App() {
  return (
    <div>

      <Reset />
      <ClientPage />
      <HeaderMenu />
      <Mainpage />
    </div>
  );
}
