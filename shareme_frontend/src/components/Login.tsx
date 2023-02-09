import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/mp4/shareVideo.mp4";
import logo from "../assets/images/logo.png";
import jwtDecode from "jwt-decode";

export default function Login() {
  const responseMessage = (response: CredentialResponse) => {
    if (!response?.credential) return;
    const userInfo = jwtDecode(response.credential);
    console.log(userInfo);
    return userInfo;
  };
  const errorMessage = (error: object | void) => {
    console.log(error);
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
