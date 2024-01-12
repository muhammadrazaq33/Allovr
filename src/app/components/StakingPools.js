import React from "react";
import Pools from "./Pools";

const StakingPools = ({ data }) => {
  return (
    <section className="my-[6rem]">
      <div>
        <article>
          <h1 className="text-[#FFFFFF] font-bold text-[2.5rem] capitalize">
            Staking pools
          </h1>
          <p className="text-[#D1D5DD] w-[36rem] tracking-wider mt-[15px]">
            Browse <span className="text-[#FFFFFF] font-bold"> ALLOVR’s</span>{" "}
            100% transparent staking pools. Select a pool to stake your{" "}
            <span className="text-[#FFFFFF] font-bold">ALLOVR</span> tokens or
            get assigned one randomly by hitting{" "}
            <span className="text-[#FBB03B]">Stake AOVR now</span>. note that
            all staking pools work the same and
          </p>
        </article>
        <article className="mt-[15px] flex justify-between items-center">
          <div className="text-[#FFF] text-[1.3rem]">
            - earn the same there is no good or bad choice here
          </div>
          <div className="flex gap-5">
            <button className="inline-flex items-center gap-2 text-[white] bg-[#ED1E79] px-[15px] py-[13px] rounded-[30px] uppercase hover:bg-[black] hover:border border-white text-[13px]">
              TRIGGER INFLATION RUN
            </button>

            <button className="text-[white] border border-[white] px-[15px] py-[13px] rounded-[30px] uppercase text-[15x] hover:bg-[#ED1E79] hover:border-transparent text-[13px]">
              REGISTER POOL
            </button>
          </div>
        </article>
      </div>
      <Pools data={data} />
    </section>
  );
};

export default StakingPools;
