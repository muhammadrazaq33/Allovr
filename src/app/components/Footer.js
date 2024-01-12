import React from "react";
import { FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="my-[5rem]">
      <div className="grid justify-items-center ">
        <h1 className="text-[#FFF] uppercase font-bold text-[3.1rem]">
          allovr
        </h1>
        <div className="text-[#FBB03B] flex gap-8 text-[25px] mt-[13px] ">
          <FaDiscord className="hover:text-[#ED1E79] hover:border-transparent" />
          <RiInstagramFill className="hover:text-[#ED1E79] hover:border-transparent" />
          <FaTwitter className="hover:text-[#ED1E79] hover:border-transparent" />
        </div>
        <p className="text-[#FFFFFF] mt-[13px]">2022 . All Right Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
