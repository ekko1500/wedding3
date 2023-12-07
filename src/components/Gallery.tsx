"use client";

import { images } from "@/datas/Images";
import React, { useState } from "react";
import image1 from "../../assets/img/1.jpg";
import DefaultBlur from "./DefaultBlur";
import Dialog from "./Dialog";
import Link from "next/link";
import { Modal } from "./Modal";

function Gallery() {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState<any>("");

  const handleModal = (img: any) => {
    setShow(true);
    setImg(img);
  };

  return (
    <div className="">
      <Modal show={show} setShow={setShow} img={img} />
      <div className="sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
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
