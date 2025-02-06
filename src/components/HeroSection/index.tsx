import { VS } from "@/Images";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-[100vw] min-h-screen    ">
      <Image
        src={"/Images/background.png"}
        layout="fill"
        alt="background"
        className="absolute top-0 left-0  -z-10 scale-105 "
      />
      <div className="flex flex-col items-center justify-center absolute bottom-0 left-[-226px]  w-[702px] h-[606px]">
        <Image
          src={"/Images/personLeft.png"}
          layout="fill"
          alt="person"
          className="z-10"
        />
        <Image
          src={"/Images/coinsLeft.png"}
          width={521}
          height={440}
          alt="person"
          className="relative left-[150px]  z-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute bottom-0 right-[0px]  w-[439px] h-[527px] ">
        <Image
          src={"/Images/personRight.png"}
          layout="fill"
          alt="person"
          className="z-10"
        />
        <Image
          src={"/Images/coinRight.png"}
          width={521}
          height={440}
          alt="person"
          className="relative right-[100px]  z-0"
        />
      </div>

      <div className="container max-w-[88rem] mx-auto flex flex-col items-center justify-center mt-[47px] z-[20] relative ">
        <p
          className="text-[#1C1C1C] text-center font-freshman text-[84px] leading-[125%] "
          style={{
            textShadow: "6px 6px 0px #FFE794",
            WebkitTextStrokeWidth: "10px",
            WebkitTextStrokeColor: "#FFE794",
            paintOrder: "stroke fill",
          }}
        >
          WORLD 1ST MEMECOINS SUPERBOWL!
        </p>
        <div className="mt-[100px]">
          <VS />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
