import divider from "../../public/img/divider.png";

function Vendor() {
  return (
    <section className="clients" id="clients">
      <div className="heading">
        <h1>our previous clients</h1>
        <img src="images/header-img.png" alt="" />
      </div>

      <div className="row">
        <div className="box-container">
          <div className="box">
            <img src="images/client-1.jpg" alt="" />
            <div className="info">
              <h3>01. mark & alice</h3>
              <p>
                {" "}
                <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet illo aut repudiandae nihil
                quidem perspiciatis natus placeat, inventore, vitae, quia totam
                ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic!{" "}
                <i className="fas fa-quote-right"></i>{" "}
              </p>
            </div>
          </div>
          <div className="box">
            <img src="images/client-2.jpg" alt="" />
            <div className="info">
              <h3>01. mark & alice</h3>
              <p>
                {" "}
                <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet illo aut repudiandae nihil
                quidem perspiciatis natus placeat, inventore, vitae, quia totam
                ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic!{" "}
                <i className="fas fa-quote-right"></i>{" "}
              </p>
            </div>
          </div>
        </div>

        <img src={divider} className="divider" alt="" />

        <div className="box-container">
          <div className="box">
            <div className="info">
              <h3>01. mark & alice</h3>
              <p>
                {" "}
                <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet illo aut repudiandae nihil
                quidem perspiciatis natus placeat, inventore, vitae, quia totam
                ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic!{" "}
                <i className="fas fa-quote-right"></i>{" "}
              </p>
            </div>
            <img src="images/client-3.jpg" alt="" />
          </div>
          <div className="box">
            <div className="info">
              <h3>01. mark & alice</h3>
              <p>
                {" "}
                <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet illo aut repudiandae nihil
                quidem perspiciatis natus placeat, inventore, vitae, quia totam
                ad dolores velit. Cumque, alias ullam. Nihil, aperiam hic!{" "}
                <i className="fas fa-quote-right"></i>{" "}
              </p>
            </div>
            <img src="images/client-4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vendor;
