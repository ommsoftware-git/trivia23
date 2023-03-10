import React from 'react';

const Contract = () => {
    return (
        <div>
            
            <section
          id="appointment"
          class="ds page_appointment parallax section_padding_top_150 section_padding_bottom_150"
          style={{backgroundPosition: "50% -6px"}}
        >
          <div class="container">
            <div class="row">
              <div
                class="col-sm-12 text-center to_animate animated fadeInUp"
                data-animation="fadeInUp"
              >
                <h4 class="thin margin_0 text-uppercase">Make An</h4>
                <h2 class="section_header">Inquire</h2>

                <form
                  class="contact-form row columns_margin_bottom_20"
                  method="post"
                  action="./"
                >
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="appointment-name"
                        >Full Name
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-user highlight" aria-hidden="true"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="name"
                        id="appointment-name"
                        class="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="appointment-phone"
                        >Phone Number
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-phone highlight" aria-hidden="true"></i>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="appointment-phone"
                        id="appointment-phone"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group select-group">
                      <label for="appointment-date"
                        >Date
                        <span class="required">*</span>
                      </label>
                      <i
                        class="fa fa-calendar highlight"
                        aria-hidden="true"
                      ></i>
                      <select
                        aria-required="true"
                        id="appointment-date"
                        name="appointment-date"
                        class="choice empty form-control"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-default=""
                        >
                          Services
                        </option>
                        <option value="1306">Home Relocation</option>
                        <option value="1406">Office Relocation</option>
                        <option value="1506">Residential Storage</option>
                        <option value="1606">Commercial Storage</option>
                        <option value="1706">Courier</option>
                        <option value="1806">Vehicle Shipping</option>
                      </select>
                      <i
                        class="fa fa-angle-down theme_button"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group select-group">
                      <label for="appointment-date"
                        >Date
                        <span class="required">*</span>
                      </label>
                      <i
                        class="fa fa-calendar highlight"
                        aria-hidden="true"
                      ></i>
                      <select
                        aria-required="true"
                        id="appointment-date"
                        name="appointment-date"
                        class="choice empty form-control"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-default=""
                        >
                          Date
                        </option>
                        <option value="1306">13.06</option>
                        <option value="1406">14.06</option>
                        <option value="1506">15.06</option>
                        <option value="1606">16.06</option>
                        <option value="1706">17.06</option>
                        <option value="1806">18.06</option>
                        <option value="1906">19.06</option>
                        <option value="2006">20.06</option>
                      </select>
                      <i
                        class="fa fa-angle-down theme_button"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group select-group">
                      <label for="appointment-time"
                        >Time
                        <span class="required">*</span>
                      </label>
                      <i class="fa fa-clock-o highlight" aria-hidden="true"></i>
                      <select
                        aria-required="true"
                        id="appointment-time"
                        name="appointment-time"
                        class="choice empty form-control"
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          data-default=""
                        >
                          Time
                        </option>
                        <option value="08am">8:00 AM</option>
                        <option value="09am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="12am">12:00 PM</option>
                        <option value="13pm">13:00 PM</option>
                        <option value="14pm">14:00 PM</option>
                        <option value="15pm">15:00 PM</option>
                        <option value="16pm">16:00 PM</option>
                        <option value="17pm">17:00 PM</option>
                      </select>
                      <i
                        class="fa fa-angle-down theme_button"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label for="appointment-message">Message</label>
                      <i class="fa fa-pencil highlight" aria-hidden="true"></i>
                      <textarea
                        aria-required="true"
                        rows="3"
                        cols="45"
                        name="appointment-message"
                        id="appointment-message"
                        class="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12 bottommargin_0">
                    <div class="contact-form-submit topmargin_30">
                      <button
                        type="submit"
                        id="appointment-_submit"
                        name="contact_submit"
                        class="theme_button color1"
                      >
                        Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        </div>
    );
};

export default Contract;