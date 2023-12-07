const data = [
  {
    about:
      "ပဲခူးတိုင်းဒေသကြီး၊ ညောင်လေးပင်မြိုနေ (ဦးဘွန်တင်း + ဒေါ်ရင်နု)၊ ဖြူးမြိုနယ် ဇေယျဝတီမြို့နေ (ဦးစံရင် + ‌ဒေါ်အုံးမြ) တို့၏ မြေး၊ ညောင်လေးပင်မြို့၊ ဗိုလ်ချုပ်လမ်းနေ (ဦးဌေးအောင်) + ဒေါ်ခင်စန်းမြင့် တို့၏ တူ၊ နေပြည်တော်၊ လယ်ဝေးမြိုနယ်၊ အေလာမြို့ မြိုသစ်(၂)လမ်းနေ",
    parents: "ဦးကျော်ကျော်အောင် + ဒေါ်စန္ဒာ တို့၏တစ်ဦးတည်းသောသား",
    name: "မောင်ဇေယျာနိုင်",
    status: "BE (Electronics Communication)",
    status2: "(Founder of Tele Boss Fiber Internet Service Co.,ltd)",
  },
  {
    about:
      "ပဲခူးတိုင်းဒေသကြီး၊ အုတ်တွင်းမြိုနယ်၊ ကျောင်းနှစ်ဆယ်ကျေးရွာအုပ်စု၊အနောက်ရေဖြူကင်းရွာနေ ( ဦးထွန်းရွှေ + ဒေါ်ကြီး )၊ တောင်ငူမြို့ ၊ မင်းကြီးညိုရပ်ကွက်နေ(ဦးထွန်းရှိန်+ ဒေါ်ကြည်အောင်) တို့၏ မြေ ဒေါ်ချိုချိုမြင့်(ကထိက)(နည်းပညာတက္ကသိုလ်-တောင်ငူ)၊ခေါ်ခန်းခန်းဝင်း(ခ)မငယ်လေးတို့၏ တူမ၊ မောင်ပြည့်ဖြိုးထက် ၊မောင်ကျော်လင်းဖြိုး တို့၏ အစ်မ ၊ အုတ်တွင်းမြိုနယ်၊ခပေါင်းနတ်စင်ကုန်းလမ်းမတော်နေ",
    parents: " ဦးသန်းဝင်း + ဒေါ်အေးမြင့်(ခ)နွေးနွေ: (ဟိန်းစတိုး) တို့၏သမီး",
    name: "မခိုင်ဇာသွယ်",
    status: "BE (Civil) ",
    status2: "(ဆည်မြောင်းနှင့် ရေအသုံးချမှုစီမံခန့်ခွဲရေးဦးစီးဌာန -တောင်ငူ)",
  },
];

function Storys() {
  return (
    <>
      <div className=" sm:columns-1 md:columns-2 lg:columns-2 gap-1  mx-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className=" w-full flex flex-col items-center  gap-4 text-center   relative py-10 px-4"
          >
            <div className=" gap-4">
              <p className=" lg:h-24 sm:h-40 p-1">{item.about}</p>
              <p className="  font-bold  p-3"> {item.parents}</p>

              <div className=" p-5">
                <h2 className=" text-2xl font-bold p-3 text-yellow-700">
                  {item.name}
                </h2>
                <p className=" text-lg text-blue-gray-800">{item.status}</p>
                <p className=" text-lg text-blue-gray-800">{item.status2}</p>
              </div>
            </div>

            <img
              src="https://img.lovepik.com/original_origin_pic/18/04/21/447fe18ca6b4d733995c93fb110024c3.png_wh860.png"
              className=" relative w-1/2"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Storys;
