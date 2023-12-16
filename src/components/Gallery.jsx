import { images } from "../datas/Images";
import { useState } from "react";
import header from "../../public/img/header-img.png";

import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";

function Gallery() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  const handleModal = (img) => {
    setShow(true);
    setImg(img);
  };

  return (
    <div className="  " style={{ backgroundColor: "#292c2b" }}>
      <div className="flex flex-col w-full text-center items-center justify-center p-10">
        <h1 className=" font-bold text-white text-6xl pt-10 mt-20 ">Gallery</h1>
        <img src={header} />
      </div>
      {/* <Modal show={show} setShow={setShow} img={img} /> */}
      <div className="sm:columns-2 md:columns-3 lg:columns-4 gap-3  mx-auto space-y-3 pb-28">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 break-inside-avoid"
            onClick={() => handleModal(item)}
          >
            <img src={item} />
          </div>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1, backgroundColor: "#ec407a" }}
        className="privacy-screen "
      />
    </div>
  );
}

export default Gallery;
