// import { image3, image7, image26 } from "../datas/Images";
import { Carousel } from "@material-tailwind/react";
// import { Carousel } from "../app/page";
import placeholder from "../../public/img/placeholder.png";
import { imageSlide } from "../datas/Images";

export default function Slider() {
  return (
    <div className="">
      <div className="   ">
        <Carousel
          loop={true}
          className=""
          autoplay
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    console.log(i);
                    setActiveIndex(i);
                  }}
                />
              ))}
            </div>
          )}
        >
          {imageSlide.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt="image"
                className="h-screen w-screen  object-contain"
              />
              <img
                src={item}
                alt="image"
                className="h-screen w-screen  object-cover -z-10 absolute top-0 blur-2xl

                "
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
