import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const imageEl = document.querySelector(".Cimimage");
      const imageRect = imageEl.getBoundingClientRect();
      const imageTop = imageRect.top + window.pageYOffset;

      if (window.pageYOffset > imageTop) {
        setScrolledUp(true);
      } else {
        setScrolledUp(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // In this example, the querySelector method is used to select the img element. The scroll event is added to the window object, which fires whenever the user scrolls the page.

  // The pageYOffset property of the window object is used to get the current scroll position of the page. If the scroll position is greater than 0, the move-up class is added to the img element to trigger the animation that moves the image up. Otherwise, the move-up class is removed to move the image back to its original position.

  return (
    <div>
      <section
        id="about"
        class="ls ms page_about background_cover section_padding_top_150 columns_margin_bottom_30"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="media_heading">
                <div class="media-left media-middle text-uppercase highlight ">
                  Hi
                </div>

                <div class="media-body media-middle">
                  <h4 class="thin bottommargin_0 text-uppercase p2">
                    Welcome to the
                  </h4>
                  <h2
                    class="section_header big cImagecontainer"
                    style={{ fontSize: "50px" }}
                  >
                    Best Movers
                  </h2>
                </div>
              </div>
              <p class="fontsize_20 grey">
                You may see many moving companies, so why choose us?
                <br />
                Let us tell you our special features...
              </p>

              <p>
                <strong>Trans23</strong> located in San Diego; one of the major
                cities of California. We are a one-stop solution to all your
                moving problems. From packing to relocating, we offer all that
                you have in mind when you think of moving.
              </p>

              <ul class="list2 grey checklist">
                <li>Your requirement is our wish</li>
                <li>Moving is quick and easy</li>
                <li>We are affordable</li>
              </ul>

              {/* <p>
                <a href="about.html" class="theme_button color1 inverse">
                  about us
                </a>
              </p> */}
              <Link
                class="animated-arrow theme_button color1 inverse"
                to="about.html"
              >
                <span class="the-arrow -left">
                  <span class="shaft"></span>
                </span>
                <span class="main">
                  <span class="text">about us</span>
                  <span class="the-arrow -right">
                    <span class="shaft"></span>
                  </span>
                </span>
              </Link>
            </div>
            <div class="col-md-6 text-center bottommargin_0">
              <div className="cImagecontainer ">
                <img
                  src="https://i.ibb.co/Z1kkZJs/change.png"
                  alt=""
                  className={`image ${
                    scrolledUp ? "move-up" : ""
                  } top-overlap Cimimage`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
