import { image3, image7, image26 } from "../datas/Images";
import { Carousel } from "@material-tailwind/react";
// import { Carousel } from "../app/page";
import placeholder from "../../public/img/placeholder.png";
import heart from "../../public/img/heart.svg";
import cornerBottom from "../../public/img/corner-bottom.svg";

export default function Slider() {
  return (
    <div className="flex h-screen items-center justify-center flex-col flex-1">
      <img src={cornerBottom} className=" absolute bottom-0 right-0 w-44" />
      <div className="  lg:w-2/3 sm:w-1/2 flex items-center justify-center  ">
        <div className=" absolute z-10 lg:w-2/6 sm:w-full">
          <img src={heart} />
        </div>

        <Carousel
          loop={true}
          className=" "
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
          {/* {imageSlide.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="image"
            className="h-full w-full object-cover"
          />
        ))} */}
          <img
            src={image3}
            alt="image 1"
            className="h-auto w-full object-cover"
            placeholder={placeholder}
          />
          <img
            src={image7}
            alt="image 2"
            className="h-auto w-full object-cover"
            placeholder={placeholder}
          />
          <img
            src={image26}
            alt="image 3"
            className="h-auto w-full object-cover"
            placeholder={placeholder}
          />
        </Carousel>
        {/* <div className=" flex-1 absolute z-20 top-3/4 w-full h-14  items-center justify-center text-center">
          <h1 className=" text-5xl text-white">He & Her</h1>
          <h1 className=" text-white">We're getting married.</h1>
        </div> */}
      </div>
    </div>
  );
}
