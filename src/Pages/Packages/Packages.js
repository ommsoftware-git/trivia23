
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Package.css";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux'
// import {removeAccount} from "../../../slice/accountSlice"
import {removeAccount} from "../../slice/accountSlice"


const Packages = () => {

  // console.log('test props from redux',props.id.payload.data)
  const count = useSelector((state) => state.account.account)
  const id = count[0]?.payload?.data

  const dispatch = useDispatch()
  // console.log('sets chack redux valu', count[0]?.payload?.data)
  console.log('sets chack redux valu', id)
// console.log('test props from redux',count.id.payload.data)
  
  const navigate = useNavigate();

  function handleClick(str) {
    // console.log(str)
    // navigate("/chackout");

    const service ={
      service:str

    }
//  console.log(alldata)
    axios
    .patch(`https://happy-cummerbund-colt.cyclic.app/api/updateaccess/${id}`, service)
    .then((response) => {
      
      // console.log(response.data);
 
      // <Packages data="good props" />
      dispatch(removeAccount())
      navigate("/chackout");
    })
    .catch((error) => {
      console.log(error.message);
    });

  }




    return (
      <>
   <div className="mainclass" id="mainpackageid">
 <div style={{marginTop:"50px", marginBottom:"30px", display:'flex', flexWrap:'wrap', justifyContent:'flex-start' , columnGap:"30px", }} class="wrapper">


    <div class="table movers">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis </span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={() => handleClick("movers")} style={{padding: "0px", fontSize: '17px'}}  >Purchase</button></div>
    </div>


    <div class="table courier">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={() => handleClick("courier")} style={{padding: "12px", fontSize: '17px', background: 'linear-gradient(135deg, #71b7e6, #9b59b6)'}}>Purchase</button></div>
    </div>


    <div class="table storage">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">99</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={() => handleClick("storage")} style={{padding: "0px", fontSize: '17px'}} >Purchase</button></div>
    </div>




    <div class="table vehicle">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis </span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={() => handleClick("vehicle")}  style={{padding: "0px", fontSize: '17px'}}>Purchase</button></div>
    </div>

    <div class="table allp">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Own User Access</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Dashbord For Manage</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Report Analysis</span>
          <span class="icon check"><i class="fa fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">24/7 Support</span>
          <span class="icon cross"><i class="fa fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button onClick={() => handleClick("all")} style={{padding: "12px", fontSize: '17px', background: 'linear-gradient(135deg, #71b7e6, #9b59b6)'}}>Purchase</button></div>
    </div>





  </div>
      </div>  


      </>              
    );
};

export default Packages;