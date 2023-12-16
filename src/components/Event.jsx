import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import header from "../../public/img/header-img.png";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line react/prop-types
function Event({ name, des }) {
  return (
    <div className=" text-center py-14 flex flex-col items-center justify-center gap-5 w-[90%] lg:w-full ">
      <h2 className=" text-6xl font-bold">{name}</h2>
      <img src={header} />
      <br />
      <div className=" relative px-20">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          m
          style={{ color: "#ec407a" }}
          className="absolute top-0 left-0 text-4xl sm:text-3xl"
        />{" "}
        <p className=" text-4xl">{des}</p>
        <FontAwesomeIcon
          icon={faQuoteRight}
          style={{ color: "#ec407a" }}
          className="absolute bottom-2 right-4 text-4xl sm:text-3xl"
        />
      </div>
    </div>
  );
}

export default Event;
