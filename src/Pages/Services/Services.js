import React from "react";
import { FaWarehouse, FaShippingFast } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <section
        id="services"
        class="ls section_padding_top_150 section_padding_bottom_130"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h4 class="thin margin_0 text-uppercase">Welcome to</h4>
              <h2 class="section_header">Our Services</h2>
              <p class="fontsize_20 grey">
                With professional movers, we provide the following services at
                affordable rates, to suit your pocket and sooth your mind.
              </p>
            </div>
          </div>
          <div class="row topmargin_30 columns_margin_bottom_30">
            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  <i class="fa fa-map-marker"></i>
                  {/* <img
                    src="./images/move 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Home Relocation</a>
                </h4>
                <p>
                  We’ll happily transport your household from one location to
                  another.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                  {/* <img
                    src="./images/relocate 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Office Relocation</a>
                </h4>
                <p>
                  Trans23 will make your long distance moving experience
                  stress-free.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 clear-sm">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  {/* <img
                    src="./images/warehouse 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Residential Storage</a>
                </h4>
                <p>
                  We offer several different moving kits so you don’t have to
                  worry about the details.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 clear-md">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-inbox" aria-hidden="true"></i> */}
                  <FaWarehouse />
                  {/* <img
                    src="./images/warehouse (1) 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Commercial Storage</a>
                </h4>
                <p>
                  Sometimes you just can’t take everything with you when you’re
                  moving.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 clear-sm">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  <i class="fa fa-gift" aria-hidden="true"></i>
                  {/* <img
                    src="./images/courier 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Courier</a>
                </h4>
                <p>
                  We have all the packing supplies, including boxes, packing
                  tape and bubble wrap.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="teaser text-center">
                <div class="teaser_icon highlight size_normal">
                  {/* <i class="fa fa-cubes" aria-hidden="true"></i> */}
                  <FaShippingFast />
                  {/* <img
                    src="./images/delivery-truck 1.png"
                    alt="home relocation"
                    style={{ width: "30px" }}
                  /> */}
                </div>
                <h4 class="text-uppercase weight-black">
                  <a href="service-single.html">Vehicle Shipping</a>
                </h4>
                <p>
                  We allow our customers to rent the moving truck, and we’ll
                  load and unload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
