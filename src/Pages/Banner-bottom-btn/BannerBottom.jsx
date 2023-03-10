import React from "react";
import "./BannerBottom.css";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
const BannerBottom = () => {
  return (
    <>
      <div className="banner-bottom-section" data-animation="fadeInUp">
        <div>
          <button
            id="appleapp"
            type="button"
            className=" py-3  text-white  ms-4"
            style={{
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
            <BsApple style={{ marginRight: "10px" }} className="mr-2" /> app
            store
          </button>

          <button
            id="Gplay"
            type="button"
            className="  py-3  text-white  mr-4"
            style={{
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
            <FaGooglePlay style={{ marginRight: "10px" }} className="mr-2" />
            google-play
          </button>
          <button
            id="Franchies_btn_mobile"
            type="button"
            className="py-3  text-white  mr-5"
            style={{
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
            <AiOutlineLogin style={{ marginRight: "10px" }} className="mr-2" />
            FRANCHISES REGISTER
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerBottom;
