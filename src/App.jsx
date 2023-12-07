// import Gallery from "../components/Gallery";
import { ThemeProvider } from "@material-tailwind/react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import HappyCouple from "./components/HappyCouple";
import HisStory from "./components/HIsStory";
import HerStory from "./components/HerStory";
import Time from "./components/Time";
import Map from "./components/Map";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Slider />

        <HappyCouple />
        <HisStory />
        <HerStory />
        <Time />
        <Map />
      </ThemeProvider>
    </>
  );
}

export default App;
