import React, { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import ImgSignup from "/Users/levuong2005/Documents/GitHub/FirstPrjReactJS/src/Login/ImageLogin.png";
import "/Users/levuong2005/Documents/GitHub/FirstPrjReactJS/src/Login/StyleSignUp.css";
// import SignupUser from "./Login/signup";
export default function LoginComponent() {
  return (
    <div>
      {/* <div className="container position-relative" style={{ height: "50vh" }}>
        <div
          className="bg-dark"
          style={{ width: "100%", height: "100%" }}
          a
        ></div>
        <div className="LayerTwo"></div>
        <div className="LayerThree"></div>
        <div className="row SideLogin">
          <div className="col align-self-start">One of three columns</div>
          <div className="col align-self-center">One of three columns</div>
          <div className="col align-self-end">One of three columns</div>
        </div>
      </div> */}
      <div className="container text-center">
        <div className="row">
          <div className="col align-self-start">One of three columns</div>
          <div className="col align-self-center">One of three columns</div>
          <div className="col align-self-end">One of three columns</div>
        </div>
      </div>
    </div>
  );
}
