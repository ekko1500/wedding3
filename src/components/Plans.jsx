import header from "../../public/img/header-img.png";
import Event from "./Event";

function Plans() {
  return (
    <section
      className=" flex flex-col items-center text-white w-full gap-6"
      style={{ backgroundColor: "#292c2b" }}
    >
      <img
        width="45"
        height="70"
        src="https://lonehtoowedding.com/wp-content/uploads/2020/06/rose-icon-01.png"
        alt=""
        loading="lazy"
      ></img>
      <br />
      <h2 className=" text-6xl font-bold">When & Where</h2>
      <br />
      <p className=" text-4xl">We love to see you soon</p>
      <br />
      <img
        width="45"
        height="70"
        src="https://lonehtoowedding.com/wp-content/uploads/2020/06/rose-icon-01.png"
        alt=""
        loading="lazy"
      ></img>
      <Event name="Date" des="27.12.2023 (Wednesday)" />

      <Event name="Time" des="8am to 10am" />

      <Event
        name="Place"
        des="ကန်လမ်း၊ တောင်ငူမြို့ ၊ 'ဟုတ်ဝမ်' မင်္ဂလာခန်းမ။"
      />
    </section>
  );
}

export default Plans;
