import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Thanks() {
  return (
    <div
      className="w-full flex justify-center items-center  text-center p-3 text-white h=[700px] "
      style={{ backgroundColor: "#292c2b" }}
    >
      <div className="  w-[1500px] h-[300px]  sm:w-[700px] sm:h-[500px] flex items-center  justify-center  flex-col text-center relative  ">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          style={{ color: "#ec407a" }}
          className="absolute top-4 left-6 text-5xl lg:text-6xl"
        />

        <h1 className="text-8xl sm:text-9xl">Thank You!</h1>
        <div className=" border-2 border-gray-700 w-2/4 my-2" />
        <p className=" my-9 text-4xl">Hope you will come to our wedding</p>

        <FontAwesomeIcon
          icon={faQuoteRight}
          style={{ color: "#ec407a" }}
          className="absolute bottom-4 right-6 text-5xl  lg:text-6xl"
        />
      </div>
    </div>
  );
}

export default Thanks;
