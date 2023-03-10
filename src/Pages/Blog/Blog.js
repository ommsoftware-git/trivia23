import React from 'react';

const Blog = () => {
    return (
        <div>
          <section
          id="blog"
          class="ls ms section_padding_top_150 section_padding_bottom_130"
        >
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h4 class="thin margin_0 text-uppercase">Latest news</h4>
                <h2 class="section_header">Blog Posts</h2>
              </div>
            </div>
            <div class="row columns_margin_bottom_20">
              <div class="col-md-4 col-sm-6">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/05.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html"
                        >Super-fast &amp; active team</a
                      >
                    </h4>
                    <p>
                      You would find our team super-fast and active, who put
                      work first, to deliver to you on time.
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-md-4 col-sm-6">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/06.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html"
                        >Professional movers team</a
                      >
                    </h4>
                    <p>
                      Our professional team of movers is trained to provide you
                      with awesome services.
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
                <article
                  class="vertical-item content-padding big-padding with_background text-center overflow-hidden"
                >
                  <div class="item-media">
                    <img src="images/gallery/07.jpg" alt="" />

                    <div class="media-links">
                      <a href="blog-single-left.html" class="abs-link"></a>
                    </div>
                  </div>
                  <div class="item-content">
                    <span class="entry-date small-text main_bg_color rounded">
                      <time
                        class="entry-date"
                        datetime="2017-03-13T08:50:40+00:00"
                      >
                        June 12, 2017
                      </time>
                    </span>
                    <h4 class="entry-title">
                      <a href="blog-single-left.html">Affordable Price</a>
                    </h4>
                    <p>
                      Often when the price is less, the quality goes down, but
                      that’s not the case with us.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Blog;