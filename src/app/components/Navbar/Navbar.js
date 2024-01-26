"use client";
import React, { useState } from "react";
import Logo from "../../../../public/Assets/logo.png";
import { IoMenu } from "react-icons/io5";
import Model from "../Model";
import Image from "next/image";

const Navbar = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <nav className="h-[120px] m-auto bg-[black] lg:px-8 px-4 text-[white] flex items-center justify-between">
      <div className="relative w-[10rem] h-[2.5rem]">
        <Image
          src="/Assets/logo.png"
          className="object-cover"
          fill
          alt=""
        ></Image>
      </div>
      <div className="flex gap-5 items-center text-[white]">
        <div className="hidden md:flex gap-5 items-center text-[white]">
          <a href="" className="capitalize text-[18px]">
            about
          </a>
          <a href="" className="capitalize text-[18px]">
            how it works
          </a>
          <a href="" className="capitalize text-[18px]">
            staking
          </a>
        </div>
        <div
          onClick={() => setShowModel(!showModel)}
          className="bg-[#ED1E79] px-6 py-2 rounded-[20px] flex items-center gap-2"
        >
          <div className="relative w-[1.5rem] h-[1.5rem]">
            <Image
              src="/Assets/phantom.png"
              fill
              className="object-cover"
              alt=""
            ></Image>
          </div>
          <p className=" uppercase text-[18px]">connected</p>
        </div>
        <IoMenu className=" text-[#ED1E79] text-[40px] md:hidden" />
      </div>
      {showModel && (
        <Model showModel={showModel} closeModel={() => setShowModel(false)} />
      )}
    </nav>
  );
};

export default Navbar;
