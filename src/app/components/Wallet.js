import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import union from "../../../public/Assets/Union.png";

const Wallet = () => {
  return (
    <section className="mt-[5rem]">
      <div className="text-[white] grid grid-cols-2">
        <article>
          <div>
            <p className="text-[#D1D5DD] text-[15px] capitalize">
              total staked at this moments
            </p>
            <p className="text-[#D1D5DD] text-[15px] capitalize mt-[5px]">
              <span className=" font-bold text-2xl text-[white]">56,669</span>{" "}
              aovr
            </p>
          </div>
          <div className="mt-[15px]">
            <p className="text-[#D1D5DD] text-[15px] capitalize">
              community earning since last payout
            </p>
            <p className="text-[#D1D5DD] text-[15px] capitalize mt-[5px]">
              <span className=" font-bold text-2xl text-[white]">3,923</span>{" "}
              aovr
            </p>
          </div>
          <div className="mt-[15px]">
            <p className="text-[#D1D5DD] text-[15px] capitalize">
              time to next payout
            </p>
            <div className="flex justify-start gap-8 mt-3">
              <p className="ml-1 bg-[#FBB03B] text-[#1A1A1A] p-[5px] rounded-full">
                02
              </p>
              <p className="bg-[#FBB03B] text-[#1A1A1A] p-[5px] rounded-full">
                10
              </p>
              <p className="bg-[#FBB03B] text-[#1A1A1A] p-[5px] rounded-full">
                22
              </p>
              <p className="ml-1 bg-[#FBB03B] text-[#1A1A1A] p-[5px] rounded-full">
                32
              </p>
            </div>
            <div className="flex justify-start gap-4 mt-3">
              <p className="text-[#D1D5DD] text-[15px] capitalize">Days</p>
              <p className="text-[#D1D5DD] text-[15px] capitalize">hours</p>
              <p className="text-[#D1D5DD] text-[15px] capitalize">minutes</p>
              <p className="text-[#D1D5DD] text-[15px] capitalize">seconds</p>
            </div>
          </div>
          <div className="mt-[21px] flex gap-2">
            <button className="inline-flex bg-[#ED1E79] px-4 py-2 rounded-[20px] items-center gap-2 uppercase hover:bg-[black] hover:border border-white text-[12px]">
              stake aovr now <GoArrowUpRight />
            </button>
            <button className="border border-white px-3 py-2 rounded-[20px] uppercase hover:bg-[#ED1E79] hover:border-transparent text-[12px]">
              withdraw aovr
            </button>
          </div>
        </article>
        <article>
          <div className="flex items-center justify-between">
            <p className=" font-bold capitalize">wallet</p>
            <a href="" className="text-[12px] text-[blue]">
              D83chhV83wr54dJtFYJWnoa7qbpTrHZTjCPbpQHbRmvD
            </a>
          </div>
          <p className="text-[#D1D5DD] text-[15px] capitalize mt-[13px]">
            balance
          </p>
          <div className="mt-[6px] flex justify-between items-center">
            <p className="text-[#D1D5DD] text-[15px] uppercase">
              <span className="text-[white] text-[19px] font-bold pr-1">
                350,000
              </span>
              aovr
            </p>
            <p className="text-[#D1D5DD] text-[15px] uppercase">
              <span className="text-[white] text-[19px] font-bold">20,000</span>{" "}
              sol
            </p>
          </div>
          <div className="bg-[#ED1E79] px-[17px] py-[13px] rounded mt-[6px]">
            <p className="capitalize">staked</p>
            <div className="flex justify-between mt-[7px]">
              <img src={union} />
              <div className="flex justify-between gap-4 items-center">
                <p className="capitalize">pool index</p>
                <p className="capitalize">slot</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="uppercase">
                <span className="text-[white] text-[19px] font-bold">
                  30,000
                </span>{" "}
                aovr
              </div>
              <div className="flex justify-center items-center gap-9">
                <p className="text-[white] text-[19px] font-bold">23</p>
                <p className="text-[white] text-[19px] font-bold">12</p>
              </div>
            </div>
          </div>
          <p className=" font-bold capitalize mt-[7px]">
            active withdrawal requests
          </p>
          <p className="text-[#D1D5DD] text-[15px] capitalize mt-[7px]">
            AOVR available for transfer on Thu 10 Oct 2022, 10.00 GMT
          </p>
          <button className="bg-[#ED1E79] px-3 py-2 rounded-[20px] mt-[6px] hover:bg-[black] hover:border border-white uppercase text-[13px]">
            completed
          </button>
        </article>
      </div>
    </section>
  );
};

export default Wallet;
