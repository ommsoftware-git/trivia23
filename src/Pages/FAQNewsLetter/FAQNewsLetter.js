import React from 'react';

const FAQNewsLetter = () => {
    return (
        <div>
              <section
          id="faq"
          class="ls section_padding_top_150 section_padding_bottom_150"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4 class="thin margin_0 text-uppercase">FAQ</h4>
                <h2 class="section_header">Frequently Asked Questions</h2>
              </div>
            </div>
            <div
              class="row columns_margin_top_60 to_animate"
              data-animation="fadeInUp"
            >
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">Do you move unique or very rare items?</h4>
                  <p>
                    Yes! We move almost all items. Be sure to let your Gorilla
                    Movers representative know ahead of time in case it requires
                    a third mover or special equipment.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">
                    How do you take care of fragile items/antiques?
                  </h4>
                  <p>
                    It’s our mission to move your belongings safely and
                    securely. To ensure your items are moved unharmed, we
                    carefully pad and shrink.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="teaser with_border big_padding text-center rounded">
                  <div
                    class="teaser_icon main_bg_color big_icon round offset_icon fontsize_20"
                  >
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                  </div>
                  <h4 class="medium">
                    Can you pack my stuff or does it have to be packed?
                  </h4>
                  <p>
                    We are happy to pack your stuff! Be sure to tell us prior to
                    the move to ensure efficiency. To minimize costs, customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="subscribe"
          class="section_subscribe cs section_padding_top_65 section_padding_bottom_65 table_section table_section_md columns_padding_0"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-center text-md-left">
                <h3 class="margin_0">
                  Wanna always be updated?
                  <span class="grey">Subscribe to our Newsletter:</span>
                </h3>
              </div>
              <div class="col-md-4 text-center text-md-right">
                <div class="widget widget_mailchimp">
                  <form class="signup" action="./" method="get">
                    <div class="form-group margin_0">
                      <input
                        class="mailchimp_email form-control"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <button type="submit" class="theme_button no_bg_button">
                      Sign Up!
                    </button>
                    <div class="response"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default FAQNewsLetter;