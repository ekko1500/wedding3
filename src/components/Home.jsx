import Slider from "./Slider";
import HappyCouple from "./HappyCouple";

import Time from "./Time";
import Map from "./Map";
import Storys from "./Storys";
import bg from "../../public/img/bg.svg";
import corner from "../../public/img/corner.svg";
import flower from "../../public/img/flower.svg";

function Home() {
  return (
    <div className=" ">
      <img src={corner} className=" -left-3 absolute   w-44 " />
      <div className=" sm:columns-1 md:columns-2 lg:columns-2 gap-1  mx-auto ">
        <HappyCouple /> <Slider />
      </div>
      <div className="flex w-full  items-ce nter justify-center p-10">
        <img src={flower} className=" sm:w-60 lg:w-1/3  " />
      </div>
      <Storys />

      <Time />
      <Map />
    </div>
  );
}

export default Home;
