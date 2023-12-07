import { images } from "../datas/Images";
import DefaultBlur from "./DefaultBlur";
import { Modal } from "./Modal";
import { useState } from "react";

function Gallery() {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");

  const handleModal = (img) => {
    setShow(true);
    setImg(img);
  };

  return (
    <div className="  pt-28">
      <div className="flex w-full text-center items-center justify-center bg-blue-gray-400 p-7">
        <h1 className=" text-5xl">Gallery</h1>
      </div>
      <Modal show={show} setShow={setShow} img={img} />
      <div className="sm:columns-2 md:columns-3 lg:columns-4 gap-3  mx-auto space-y-3 pb-28">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 break-inside-avoid"
            onClick={() => handleModal(item)}
          >
            <DefaultBlur src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
