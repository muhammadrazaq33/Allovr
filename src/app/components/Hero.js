import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between mt-5">
        <article className="text-[white] w-[590px] h-[428px] mt-[4rem]">
          <p className="text-[66px] capitalize font-bold">stake</p>
          <p className="text-[66px] text-[#FBB03B]  uppercase leading-[2.8rem] font-bold">
            allovr
          </p>
          <p className="capitalize h-[56px] w-[325px] mt-7">
            this is the best time to get the earnings you dreams of.
          </p>
          <button className="border border-white rounded-[20px] px-5 py-2 mt-3 inline-flex items-center gap-1 hover:bg-[#ED1E79] hover:border-transparent uppercase text-[13px]">
            scroll down <GoArrowDownRight />
          </button>
        </article>
        <div className="relative w-[500px] text-center h-[400px]">
          <Image
            src="/Assets/hero-img.png"
            fill
            className="object-cover"
            alt=""
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
