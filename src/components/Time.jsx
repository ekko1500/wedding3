import date from "../../public/img/date.png";
import time from "../../public/img/time.png";
import place from "../../public/img/place.png";
import underline from "../../public/img/underline.png";

const data = [
  {
    title: "မင်္ဂလာနေ့ရက်",
    description: "၁၃၈၅ခုနှစ်၊ နတ်တော်လပြည့်နေ့၊ ၂၇.၁၂.၂၀၂၃ (ဗုဒ္ဓဟူးနေ့)၊ ",
    img: date,
  },
  {
    title: "မင်္ဂလာအချိန်",
    description: "နံနက် (၈:၀၀)နာရီမှ (၁၁:၀၀) နာရီအထိ။",
    img: time,
  },
  {
    title: "မင်္ဂလာနေရာ",
    description: "ကန်လမ်း၊ တောင်ငူမြို့ ၊ \n'ဟုတ်ဝမ်' မင်္ဂလာခန်းမ။",
    img: place,
  },
];

function Time() {
  return (
    <div className="  w-full flex flex-col items-center  gap-4 text-center   relative p-10">
      {data.map((item, index) => (
        <div key={index} className=" p-5 flex flex-col justify-center ">
          {/* <h1 className=" text-2xl p-10 font-bold ">{item.title}</h1> */}
          <img src={item.img} className=" h-20 w-auto object-contain" />
          <img src={underline} className=" sm:h-2 lg:h-5  object-contain" />
          <p className="py-10">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Time;
