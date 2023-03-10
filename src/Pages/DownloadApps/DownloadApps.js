import React from "react";
import "./DownloadApps.css";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
const DownloadApps = () => {
  return (
    <div>
      {/* start apps downlod section  */}

      <section style={{ background: "#075890" }}>
        <div className="container">
          <div className="row clearfix">
            {/* <!-- Content Column --> */}
            <div className="content-column col-lg-4 col-md-12 col-sm-12">
              <div
                style={{ marginTop: "25px", marginBottom: "25px" }}
                className="inner-column"
              >
                <div className="sec-title">
                  <h2
                    className="my-4"
                    style={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    Easy And Perfect Solution Trans23 App
                  </h2>
                </div>
                <div className="text">
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontFamily: "revert",
                      color: "#fff",
                      fontSize: "12px",
                      textAlign: "justify",
                    }}
                  >
                    Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Nulla Placeat Deserunt Saepe Repudiandae Veniam Soluta
                    Minima Dolor Hic Aperiam Iure.
                    <br />
                    <br />
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                    Laudantium, Quaerat. Dolorem Ratione Saepe Magni Quo
                    Inventore Porro Ab Voluptates Eos, Nam Eius Provident
                    Accusantium, Quia Similique Est, Repellendus Et Reiciendis.
                  </p>
                </div>
                <div className=" clearfix ">
                  <div
                    style={{ marginTop: "27px" }}
                    className="d-flex justify-content-left mt-4 "
                  >
                    {/* <div className='row'>
                      <div className='col-12'> */}
                    <button
                      type="button"
                      id="appleapp"
                      className=" py-3  text-white  ms-4"
                      style={{
                        // display: "flex",
                        alignItems: "center",
                        height: "43px",
                        background:
                          "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                        border: "none",
                        marginRight: "20px",
                        padding: "10px 41px",
                        fontSize: "14px",
                        borderRadius: "25px",
                      }}
                    >
                      <BsApple
                        style={{ marginRight: "10px" }}
                        className="mr-2"
                      />{" "}
                      app store
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-4 col-md-12 col-sm-12 text-center">
              <div className="inner-column" style={{ marginTop: "10px" }}>
                <div className="image">
                  <img
                    src="./images/iphone.png"
                    alt=""
                    style={{ height: "400px" }}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Content Column --> */}
            <div className="content-column col-lg-4 col-md-12 col-sm-12">
              <div
                style={{ marginTop: "25px", marginBottom: "25px" }}
                className="inner-column"
              >
                <div className="sec-title">
                  <h2
                    className="my-4"
                    style={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    Easy And Perfect Solution Trans23 App
                  </h2>
                </div>
                <div className="text">
                  <p
                    style={{
                      fontSize: "1.7rem",
                      fontFamily: "revert",
                      color: "#fff",
                      fontSize: "12px",
                      textAlign: "justify",
                    }}
                  >
                    Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Nulla Placeat Deserunt Saepe Repudiandae Veniam Soluta
                    Minima Dolor Hic Aperiam Iure.
                    <br />
                    <br />
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                    Laudantium, Quaerat. Dolorem Ratione Saepe Magni Quo
                    Inventore Porro Ab Voluptates Eos, Nam Eius Provident
                    Accusantium, Quia Similique Est, Repellendus Et Reiciendis.
                  </p>
                </div>
                <div className=" clearfix ">
                  <div
                    style={{ marginTop: "27px" }}
                    className="d-flex justify-content-left mt-4 "
                  >
                    <button
                      type="button"
                      id="Gplay"
                      className="  py-3  text-white  mr-4"
                      style={{
                        // display: "flex",
                        alignItems: "center",

                        height: "43px",
                        background:
                          "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                        border: "none",
                        padding: "10px 35px",
                        fontSize: "14px",
                        borderRadius: "25px",
                      }}
                    >
                      <FaGooglePlay
                        style={{ marginRight: "10px" }}
                        className="mr-2 "
                      />
                      google-play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end apps downlod section  */}
    </div>
  );
};

export default DownloadApps;
