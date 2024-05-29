"use client";

import CarouselTwoComponent from "@/components/carouselTwoComponent";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

export default function LoginComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const data = {
    email: email,
    password: password,
  };

  console.log(data);

  const handleChange = (
    type: string,
    data: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (type === "email") {
      setEmail(data.target.value);
    }

    if (type === "password") {
      setPassword(data.target.value);
    }
  };

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v19/dtokos/login",
        data
      );
      const result = response.data;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" ml-[200px] max-sm:mr-0 max-sm:ml-0 mr-[200px] max-sm:mt-0 mt-[75px] rounded-lg bg-slate-50 rounded-tl-4xl flex max-sm:flex-col">
      <div className=" max-sm:p-6 font-sora flex flex-col items-center justify-center pb-16 pt-16 basis-1/2 h-[700px] rounded-3xl bg-slate-100">
        <div className=" text-center mt-7">
          <h2 className=" text-4xl">Welcome back</h2>
          <p className=" font-extralight text-xs mt-2">
            Dont have account yet?
            <span className=" pl-2">
              <Link className=" underline" href={"/register"}>
                Register
              </Link>
            </span>
          </p>
        </div>
        <div className=" flex gap-5 mt-9">
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaGoogle size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaApple size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaFacebook size={20} />
          </div>
          <div className=" w-[40px] h-[40px] rounded-full border-[0.5px] border-black flex items-center justify-center">
            <FaInstagram size={20} />
          </div>
        </div>
        <div className=" flex items-center justify-center w-[400px] h-[20px] gap-5 mt-9">
          <hr className=" w-full text-black" />
          <p className=" text-sm">Or</p>
          <hr className=" w-full text-black" />
        </div>
        <div className=" w-[400px] mt-9 flex flex-col gap-5 max-sm:p-6">
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("email", e)
              }
              className=" w-full h-[50px] pl-3 focus:outline-none bg-slate-200 rounded-3xl placeholder:text-sm text-sm"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className=" flex flex-col items-start gap-2">
            <label htmlFor="email">Password</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("password", e)
              }
              className=" w-full h-[50px] placeholder:text-sm pl-3 focus:outline-none bg-slate-200 rounded-3xl text-sm"
              type="password"
              placeholder="enter your password"
            />
          </div>
        </div>
        <div>
          <div className=" max-sm:m-6 w-[400px] bg-black text-white flex items-center justify-center rounded-3xl h-[50px] mt-9">
            <button onClick={loginHandler}>sign in</button>
          </div>
          <div className=" mt-10 text-center">
            <p className=" underline text-sm">forgot password</p>
          </div>
        </div>
      </div>
      <div className=" basis-1/2 max-sm:hidden">
        <CarouselTwoComponent />
      </div>
    </div>
  );
}
