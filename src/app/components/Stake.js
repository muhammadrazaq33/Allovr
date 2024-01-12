import React from "react";

const Stake = () => {
  return (
    <section className="mt-[6rem]">
      <div className="flex justify-between items-center gap-16">
        <article>
          <img src="" />
          <div className="text-[white] w-[350px] h-[310px] bg-red-100">
            image
          </div>
        </article>
        <article>
          <h3 className="text-[#FFFFFF] text-[35px] font-bold capitalize">
            what is staking?
          </h3>
          <p className="text-[#D1D5DD] text-[15px] mt-[10px]">
            Staking is when you lock AOVR tokens over a certain time span. In
            return, you receive a share of the weekly minted new{" "}
            <span className="text-[#FFFFFF] font-bold">AOVR</span> tokens. While
            your tokens, are staked you cannot send them to other wallets cast
            votes wihte them in the{" "}
            <span className="text-[#FFFFFF] font-bold">ALLOVR DAO</span> or make
            use of any other utility the tokens hold. However, it is completely
            up to you how many tokens if any you’d like to stake.
          </p>
        </article>
      </div>
      <div className="text-[#FFFFFF] mt-8 w-[610px] h-[110px]">
        - The number of <span className="text-[#FBB03B]">tokens</span> you gain
        from the weekly minted supply is proportional to the size of your stake
        compared to those of all others. The minimum staking period is one wee
        after that you can withdraw your tokens{" "}
        <span className="text-[#FBB03B]">plus your earned interest</span> at any
        time.
      </div>
    </section>
  );
};

export default Stake;
