import Logo from "../../../../public/Assets/logo.png";
import { IoMenu } from "react-icons/io5";
import Model from "../Model";
// import { useState } from "react";

const Navbar = () => {
  // const [showModel, setShowModel] = useState(false);
  return (
    <nav className=" max-w-[950px] mt-[36px] m-auto h-[52px] bg-[black] text-[white] flex items-center justify-between">
      <div className="flex">
        <img src={Logo} alt="" />
        <p className="text-[white] text-[30px] font-bold">ALLOVR</p>
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
        <div className="bg-[#ED1E79] px-6 py-2 rounded-[20px]">
          <img src="" />
          <p className=" uppercase text-[18px]">connected</p>
        </div>
        <IoMenu className=" text-[#ED1E79] text-[40px] md:hidden" />
      </div>
      {/* <Model showModel={showModel} /> */}
      <Model />
    </nav>
  );
};

export default Navbar;
