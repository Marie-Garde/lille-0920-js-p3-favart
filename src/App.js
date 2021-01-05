import HeaderMenu from "./components/HeaderMenu";
import Mainpage from "./components/Main";
import Agissons from "./components/Agissons";
import { Reset } from "styled-reset";

export default function App() {
  return (
    <div>
      <Reset />
      <Agissons />
    </div>
  );
}
