import header from "../../public/img/header-img.png";
import img1 from "../../public/img/forweb1.jpg";
import img2 from "../../public/img/forweb8.jpg";
import img3 from "../../public/img/forweb16.jpg";

function Story() {
  return (
    <div
      className=" w-full flex items-center  flex-col text-center p-10 text-white gap-6 pb-48 pt-28"
      style={{ backgroundColor: "#292c2b" }}
    >
      <h2 className="  font-bold my-2 text-7xl">Our Story</h2>
      <img src={header} />

      <br />
      <br />
      <div className=" text-4xl  text-blue-gray-100">
        <h3 className=" text-4xl">First Met in 2013</h3>

        <br />
        <h3 className=" text-4xl">Get Married in 2023</h3>
      </div>
      <br />
      <br />

      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full ">
        <div className="border-4 sm:border-8 border-white rounded">
          <img
            className="h-auto max-w-full rounded-lg border-2"
            src={img1}
            alt=""
          />
        </div>
        <div className="border-4 sm:border-8 border-white rounded">
          <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
        </div>
        <div className="border-4 sm:border-8 border-white rounded">
          <img className="h-auto max-w-full rounded-lg" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
