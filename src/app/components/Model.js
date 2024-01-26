import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Model = ({ closeModel }) => {
  const handleClose = (e) => {
    if (e.target.id === "close") closeModel();
  };
  return (
    <div
      onClick={handleClose}
      id="close"
      className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center"
    >
      <div className="text-white bg-black w-[30rem] p-5 flex flex-col rounded-lg">
        <button
          onClick={() => closeModel()}
          className="text-1xl font-bold text-[Red] place-self-end"
        >
          X
        </button>
        <p className="text-white font-bold text-[2rem] capitalize mb-[15px]">
          stake <span className="uppercase">aovr</span>
        </p>
        <p className="text-[#D1D5DD] text-[12.5px] mb-[15px] ">
          Staking some or all of your 25.200.000{" "}
          <span className="text-[white] uppercase font-bold"> AOVR</span> will
          allow you to earn{" "}
          <span className="text-[white] uppercase font-bold"> AOVR</span>{" "}
          weekly. The minimum investment time is 1 week, meaning you will be
          able to withdraw your stake for 1 week. The minimum stake is 10{" "}
          <span className="text-[white] uppercase font-bold"> AOVR</span>.
        </p>
        <h3 className="text-[#D1D5DD] text-[1rem] capitalize font-medium mb-[12px]">
          stake
        </h3>
        <input
          type="text"
          placeholder="5000"
          className="rounded-lg bg-[#252525] p-1.5 border border-transparent mb-[13px] text-[#FFFFFF]"
        />
        <button className="text-white uppercase bg-[#FBB03B] rounded-3xl inline-flex items-center py-2 px-3 justify-center">
          stake 5000 aovr <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Model;
