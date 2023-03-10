import React from "react";
import "./SingUp.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { addAccount } from "../../../slice/accountSlice";

import { useSelector, useDispatch } from "react-redux";

const SingUp = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const alldata = {
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      state: data.state,
      city: data.city,
      status: "InActive",
    };
    //  console.log(alldata)
    axios
      .post(
        "https://happy-cummerbund-colt.cyclic.app/api/franciesSingUp",
        alldata
      )
      .then((response) => {
        // console.log(response.data);
        dispatch(addAccount(response.data));
        // <Packages data="good props" />
        navigate("/package");
      })
      .catch((error) => {
        console.log(error.message);
      });

    // signupWithEmailAndPassword(
    //   data.username,
    //   data.email,
    //   data.password,
    //   photoURL,
    //   userInfo
    // );
  };

  // image upload handler
  // const imageUploadHandler = (e) => {
  //   const imageData = new FormData();
  //   imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
  //   imageData.append("image", e.target.files[0]);
  //   console.log(imageData);
  //   axios
  //     .post("https://api.imgbb.com/1/upload", imageData)
  //     .then(function (response) {
  //       setPhotoURL(response.data.data.display_url);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div id="singUp">
      <div className="fullpage">
        <div class="fromContainer">
          <div class="title">Franchises Registration</div>
          <div class="content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("username", { required: true })}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    {...register("phone", { required: true })}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Address</span>
                  <input
                    type="text"
                    placeholder="Enter your Address"
                    {...register("address", { required: true })}
                  />
                </div>
                <div class="input-box">
                  <span class="details">State</span>
                  <input
                    type="text"
                    placeholder="Enter your State"
                    {...register("state", { required: true })}
                  />
                </div>
                <div class="input-box">
                  <span class="details">City</span>
                  <input
                    type="text"
                    placeholder="Enter your City"
                    {...register("city", { required: true })}
                  />
                </div>

                <div class="input-box ">
                  <span class="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
              {/* <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div> */}
              <div class="button">
                <input
                  style={{ padding: "0px" }}
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
