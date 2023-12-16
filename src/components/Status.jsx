import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

function Status({ name, status1, status2 }) {
  return (
    <div className=" text-center relative p-16 flex flex-col justify-center items-center gap-3">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        style={{ color: "#ec407a" }}
        className="absolute top-0 left-0 text-4xl sm:text-5xl"
      />
      <h3 className="font-bold text-5xl">{name}</h3>
      {/* <div className=" w-4/5  bg-pink-400 border-2 border-blue-gray-800 my-3"></div> */}
      <br />
      <p className=" text-3xl">{status1}</p>
      <p className=" text-3xl">{status2}</p>
      <FontAwesomeIcon
        icon={faQuoteRight}
        style={{ color: "#ec407a" }}
        className="absolute bottom-2 right-4 text-4xl sm:text-5xl"
      />
    </div>
  );
}

export default Status;
