import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { addAccount } from "../../../slice/accountSlice";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";

const Signup = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const allData = {
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      state: data.state,
      city: data.city,
      status: "InActive",
    };

    axios
      .post(
        "https://happy-cummerbund-colt.cyclic.app/api/franciesSingUp",
        allData
      )
      .then((response) => {
        dispatch(addAccount(response.data));

        navigate("/package");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 exit-btn-section">
            <Link to="/" type="button" class=" btn-exit">
              <ImCross />
            </Link>
          </div>
        </div>
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>Franchises Registration</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="">
                    <div class="input_field">
                      <span>
                        <i aria-hidden="true" class="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        {...register("username", { required: true })}
                      />
                    </div>
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-phone"></i>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Your Phone No"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter Your Address"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter Your State"
                      {...register("state", { required: true })}
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i class="fa fa-building" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter Your City"
                      {...register("city", { required: true })}
                    />
                  </div>
                  <div class="input_field">
                    <span>
                      <i aria-hidden="true" class="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="text-center">
                    <button type="button" class=" btn-primary">
                      REGISTER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
