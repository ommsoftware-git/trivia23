import React from 'react';

const Testmonials = () => {
    return (
        <div>
            <section
          id="review"
          class="ls section_padding_top_150 section_padding_bottom_150"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-lg-offset-1 text-center">
                <div
                  class="owl-carousel testimonials-owl-dots"
                  data-responsive-lg="3"
                  data-responsive-md="3"
                  data-responsive-sm="3"
                  data-responsive-xs="3"
                  data-center="true"
                  data-loop="true"
                  data-margin="30"
                  data-touch-drag="false"
                  data-mouse-drag="false"
                >
                  <div>
                    <img src="images/faces/01.jpg" alt="" />
                  </div>

                  <div>
                    <img src="images/faces/02.jpg" alt="" />
                  </div>

                  <div>
                    <img src="images/faces/03.jpg" alt="" />
                  </div>
                </div>

                <div
                  class="owl-carousel testimonials-owl-content topmargin_20"
                  data-responsive-lg="1"
                  data-responsive-md="1"
                  data-responsive-sm="1"
                  data-responsive-xs="1"
                  data-loop="true"
                  data-margin="20"
                  data-dots="true"
                  data-nav="false"
                >
                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Lakisha Knaus</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    These guys are the best movers that I have ever used! With
                    all of the positive reviews, how could I go wrong? I called
                    them and had constant communication with Derek via phone and
                    email and felt reassured that everything was going to be
                    taken care of.
                  </blockquote>

                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Charly Williams</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    1st Choice Movers came highly recommended to me from a
                    friend who had booked several moves with this company. I
                    contacted Derek and he emailed me directly with a quote
                    within 20 minutes.
                  </blockquote>

                  <blockquote class="with_single_quote text-center">
                    <div class="item-meta">
                      <h3 class="bottommargin_0">Albert Schneider</h3>
                      <p class="small-text grey">Customer</p>
                    </div>
                    I would 100% recommend 1st Choice Movers again. I had the
                    pleasure of working with Stivan an Ogen who were extremely
                    fast, organized and able to answer all of my questions. I
                    can’t even believe I was considering moving myself, these
                    guys made it so easy.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>


        </div>
    );
};

export default Testmonials;