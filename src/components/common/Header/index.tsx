import { Discord, Telegram } from "@/Images";
import React from "react";

const Header = () => {
  return (
    <div className=" felx flex-col items-center justify-center px-[60px] pt-[32px]">
      <header className="container mx-auto max-w-[88rem] bg-[#FFFBEE] py-[10px] px-[32px] rounded-[40px] flex flex-row items-center justify-between gap-[32px]">
        <div className="flex flex-row items-center justify-start gap-[32px]">
          <p className="text-[#000] font-freshman text-[32px] leading-[100%]">
            SUPERBOWL
          </p>
          <a href="https://www.google.com">
            <Telegram />
          </a>
          <a href="https://www.google.com">
            <Discord />
          </a>
        </div>

        <button
          className="capitalize px-[30px] font-jockey py-[15px] flex flex-col items-center justify-center bg-[#FFECAC] border-[2px] border-solid border-[#1C1C1C] rounded-[40px] "
          style={{
            boxShadow: "2px 2px 0px 0px #000",
          }}
        >
          {" "}
          buy{" "}
        </button>
      </header>
    </div>
  );
};

export default Header;
