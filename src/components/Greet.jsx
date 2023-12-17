import header from "../../public/img/header-img.png";
import middle from "../../public/img/forweb14.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Status from "./Status";
function Greet() {
  return (
    <div
      className=" w-full h-auto flex items-center  flex-col text-center py-10 text-white gap-2"
      style={{ backgroundColor: "#292c2b" }}
    >
      <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-2  w-10/12">
        <div className="flex relative flex-col items-center text-center justify-center ">
          <h2 className="text-6xl font-bold ">Meet the Groom</h2>
          <br />
          <img src={header} />
          <br />
          <Status
            name="Zay Yar Naing"
            status1="BE (Electronics Communication)"
            status2="(Founder of Tele Boss Fiber Internet Service Co.,ltd)"
          />
        </div>
        <div className="flex flex-col justify-center py-5 md:py-0 lg:py-0 ">
          <img
            className="max-w-full rounded-lg object-contain"
            src={middle}
            alt=""
            style={{ height: "600px" }}
          />
        </div>
        <div className="flex relative flex-col items-center justify-center ">
          <h2 className="text-6xl font-bold ">Meet the Pride</h2>
          <br />
          <img src={header} />
          <br />
          <Status name="Khine Zar Thwe" status1="BE (Civil)" status2="" />
        </div>
      </div>
    </div>
  );
}

export default Greet;
