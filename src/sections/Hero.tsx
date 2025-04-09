import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className=" py-20 md:py-32 lg:py-40 relative z-0 overflow-x-clip">

      {/* main hero section animation code */}
      <div
        className=" absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}></div>

      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>
      {/* star code start */}
      <HeroOrbit size={800}>
      <StarIcon className=" size-28 text-emerald-300"/>
      </HeroOrbit>

      {/* star code end */}
      <div className="container">
        <div className=" flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className=" size-[100px]" />
          <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg">
            <div className=" bg-green-500 size-2.5 rounded-full"></div>
            <div className=" text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className=" max-w-lg mx-auto">
          <h1 className=" font-serif text-3xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className=" mt-4 text-center text-white/60 ">
            I specialize in transforming designs into functional,
            high-performing web experiences. Let's discuss your next project.
          </p>
        </div>
        <div className=" flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <button className=" flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className=" font-semibold">Explore My Work </span>
            <ArrowDown className=" size-4" />
          </button>
          <button className=" flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className=" font-semibold">Let's Connect</span>👋
          </button>
        </div>
      </div>
    </div>
  );
};
