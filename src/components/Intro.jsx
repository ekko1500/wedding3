import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Intro() {
  return (
    <div
      className="flex  w-[95%] lg:w-full relative  items-center justify-center"
      style={{ height: "40rem" }}
    >
      <div
        className=" p-4 absolute lg:w-7/12 sm:w-11/12 my-10  bg-white  shadow-sm flex   rounded border-2 border-pink-300 text-center items-center justify-center gap-6 flex-col"
        style={{ height: "29rem" }}
      >
        <FontAwesomeIcon
          icon={faQuoteLeft}
          size="2xl"
          style={{ color: "#ec407a" }}
          className="absolute top-2 left-4 sm:text-3xl"
        />
        <p className=" text-2xl text-blue-gray-600">WE ARE GETTING MARRIED</p>

        <h1 className=" font-bold lg:text-5xl sm:text-sm  text-blue-gray-700">
          {" "}
          Mg Zayar Naing & Ma Khine Zar Thwe
        </h1>

        <p className=" text-2xl text-blue-gray-600">SAVE THE DATE</p>

        <h3 className=" font-bold text-4xl text-blue-gray-600">
          DECEMBER 27TH 2023 (TAUNGOO)
        </h3>

        <FontAwesomeIcon
          icon={faQuoteRight}
          size="2xl"
          style={{ color: "#ec407a" }}
          className="absolute bottom-2 right-4 sm:text-3xl"
        />
      </div>
    </div>
  );
}

export default Intro;
