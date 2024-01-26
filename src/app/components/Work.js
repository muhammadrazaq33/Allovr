import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";

const Work = () => {
  return (
    <section className="mt-[5rem]">
      <div className="flex justify-between items-center gap-[1rem]">
        {/* left side*/}
        <article className="max-w-[35rem]">
          <h2 className="text-[#FFFFFF] font-bold text-[2.5rem] capitalize">
            how does it work?
          </h2>
          <p className="text-[#D1D5DD] mt-[8px]">
            The total AOVR supply is inflated with an additional 3% every year.
            The total <span className="text-[#FFFFFF] font-bold">AOVR</span>{" "}
            supply is inflated with an additional 3% every year. This inflation
            happens in weekly increments, paid out to everyone in the community
            with staked AOVR tokens at the time of payout and proportional to
            the amount staked.
          </p>
          <p className="text-[#D1D5DD] mt-[10px] w-[34rem]">
            All staked tokens are held by the{" "}
            <span className="text-[#FFFFFF] font-bold">AOVR</span> Staking
            treasury, with is controled by the{" "}
            <span className="text-[#FFFFFF] font-bold">DAO</span> and therefore
            secured against malicious behavior by the{" "}
            <span className="text-[#FFFFFF] font-bold">ALLOVR</span> community.
          </p>
        </article>
        {/* right side */}
        <article className="relative w-[24rem] h-[23rem]">
          <Image
            src="/Assets/how-illustration.png"
            fill
            className="object-cover"
          ></Image>
        </article>
      </div>
      <div className="w-[38rem] mt-[25px]">
        <p className="text-[#FFF] tracking-wider">
          - An on-chain register of staking pools is{" "}
          <span className="text-[#FBB03B]"> maintained publicly</span> and{" "}
          <span className="text-[#FBB03B]">transparently</span>, keeping reords
          of correct inflation distribution over all eligible accounts and{" "}
          <span className="text-[#FBB03B]">outsanting payments</span> per
          staking slot.
        </p>
        <div className=" mt-[15px] flex gap-5">
          <button className="inline-flex items-center gap-2 text-[white] bg-[#ED1E79] px-[15px] py-[13px] rounded-[30px] uppercase  hover:bg-[black] hover:border border-white text-[13px]">
            read technical description <GoArrowDownRight />
          </button>

          <button className="text-[white] border border-[white] px-[15px] py-[12px] rounded-[30px] uppercase hover:bg-[#ED1E79] hover:border-transparent text-[13px]">
            browse staking pools
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
