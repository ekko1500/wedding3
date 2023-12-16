import Greet from "./Greet";
import Intro from "./Intro";
import Map from "./Map";
import Photos from "./Photos";
import Plans from "./Plans";
import Slider from "./Slider";
import Story from "./Story";
import Thanks from "./Thanks";
import { motion, useIsPresent } from "framer-motion";

function Home() {
  const isPresent = useIsPresent();

  return (
    <div className="flex flex-col items-center ">
      <Slider />
      <Intro />
      <Story />
      <Greet />
      <Plans />
      <Map />

      <Photos />
      <Thanks />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
}

export default Home;
