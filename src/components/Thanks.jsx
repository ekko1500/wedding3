import thanks from "../../public/img/thanks.jpg";

function Thanks() {
  return (
    <div className="flex h-screen justify-center items-center">
      <img src={thanks} className="  lg:w-3/5 sm:w-full" />
    </div>
  );
}

export default Thanks;
