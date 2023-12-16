import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import header from "../../public/img/header-img.png";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../public/img/forweb5.jpg";
import img2 from "../../public/img/forweb11.jpg";
import img3 from "../../public/img/forweb24.jpg";
import { useNavigate } from "react-router-dom";

function Photos() {
  const navigate = useNavigate();

  return (
    <div
      className=" flex flex-col w-full  justify-center items-center py-44"
      style={{ backgroundColor: "#292c2b" }}
    >
      <div className=" text-center pb-16">
        <h2 className=" m-3 text-white text-6xl font-bold">Our Gallery</h2>
        <img src={header} className=" my-4" />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 w-10/12 ">
        <div className="border-8 border-white rounded">
          <img
            className="h-auto max-w-full rounded-lg border-2"
            src={img1}
            alt=""
          />
        </div>
        <div className="border-8 border-white rounded">
          <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
        </div>
        <div className="border-8 border-white rounded">
          <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
        </div>
        <div
          className="border-8 border-white rounded flex flex-col items-center justify-center text-center bg-white"
          onClick={() => navigate("/gallery")}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className=" text-7xl"
          />
          <br />
          <h5> See more</h5>
        </div>
      </div>
    </div>
  );
}

export default Photos;
