import { image11, image16, image28, image32 } from "../datas/Images";
import { Carousel } from "@material-tailwind/react";
// import { Carousel } from "../app/page";

export default function Slider() {
  return (
    <div className="flex items-center justify-center flex-col flex-1">
      <div className=" pt-9 lg:w-1/2 sm:w-full ">
        <Carousel
          loop={true}
          className=" "
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
            src={image11}
            alt="image 1"
            className="h-auto w-full object-cover"
          />
          <img
            src={image16}
            alt="image 2"
            className="h-auto w-full object-cover"
          />
          <img
            src={image28}
            alt="image 3"
            className="h-auto w-full object-cover"
          />
          <img
            src={image32}
            alt="image 3"
            className="h-auto w-48 object-cover"
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
