import React from "react";

const Pools = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[2.1rem] mt-[3.5rem]">
        {data.map((card) => {
          const { id, number, TotalStaked, TotalOwned, AvailableSlots, Link } =
            card;
          return (
            <article className="flex flex-col mt-[23px]" key={id}>
              <p className="text-[#FFF] text-[1.2rem] font-bold">
                Pool {number}
              </p>
              <div className="flex justify-between mt-[20px]">
                <p className="text-[#D1D5DD] capitalize text-[13px]">
                  total staked
                </p>
                <p className="text-[#D1D5DD] capitalize text-[13px]">
                  total owned
                </p>
              </div>
              <div className="flex justify-between mt-[3.5px]">
                <p className="text-[#D1D5DD] uppercase text-[13px]">
                  <span className="text-[#FFF] text-[1.2rem] font-bold">
                    {" "}
                    {TotalStaked}
                  </span>{" "}
                  aovr
                </p>
                <p className="text-[#D1D5DD] uppercase text-[13px]">
                  <span className="text-[#FFF] text-[1.2rem] font-bold">
                    {TotalOwned}
                  </span>{" "}
                  aovr
                </p>
              </div>
              <div className="text-[#D1D5DD] capitalize text-[13px] mt-[10px]">
                availeable slots :{" "}
                <span className="text-[#FBB03B] text-[1.2rem] font-bold ml-1">
                  {" "}
                  {AvailableSlots}
                </span>{" "}
                slots
              </div>
              <a href="" className="text-[blue] break-words text-[13px]">
                {Link}
              </a>
              <button className="bg-[#ED1E79] py-2 px-4 rounded-[20px] capitalize text-[white] mt-[15px] text-[13px] hover:bg-[black] hover:border border-white">
                stake
              </button>
            </article>
          );
        })}
      </div>
      <div className="grid  justify-items-center ">
        <button className=" uppercase text-[#FFF] border border-[#FFF] rounded-[30px] py-2 px-8 mt-20 hover:bg-[#ED1E79] hover:border-transparent">
          load more...
        </button>
      </div>
    </div>
  );
};

export default Pools;
