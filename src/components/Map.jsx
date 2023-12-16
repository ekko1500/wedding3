function Map() {
  return (
    <div
      className=" w-full flex flex-col items-center  gap-4 text-center  relative py-16 "
      style={{ backgroundColor: "#292c2b" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d548.4091292630345!2d96.43682931362967!3d18.938558144789894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c5d8f7270da83d%3A0xc81902e2ff714e13!2sHote%20Wan%20Chinese%20Temple!5e1!3m2!1sen!2smm!4v1702718149546!5m2!1sen!2smm"
        // className="w-full"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        className=" sm:w-full lg:w-2/3  px-2 sm:h-[300px] lg:h-[600px]"
      ></iframe>
    </div>
  );
}

export default Map;
