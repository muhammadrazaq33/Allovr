import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const StakeAction = () => {
  return (
    <section className="mt-[6rem]">
      <div className="bg-[#FBB03B] w-[950px] h-[250px] flex justify-center items-center rounded-[17px] shadow-2xl">
        <div>
          <div className="text-[#1A1A1A] text-[50px] font-bold">
            Start your action now!
          </div>
          <div className=" justify-center mt-[15px] flex gap-5">
            <button className="inline-flex items-center gap-2 text-[white] bg-[#1A1A1A] px-[15px] py-[13px] rounded-[30px] uppercase text-[15px] hover:text-[black] hover:border border-[black] hover:bg-[#FBB03B]">
              stake aovr now <GoArrowDownRight />
            </button>

            <button className="text-[#1A1A1A] border border-[#1A1A1A] px-[15px] py-[12px] rounded-[30px] uppercase text-[15x] hover:bg-[black] hover:text-[white]">
              withdraw aovr
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeAction;
