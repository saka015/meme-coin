import Image from "next/image";

const MemeSuperBowl = () => {
  return (
    <section className="container mx-auto max-w-[88rem] flex flex-col items-center justify-start py-[64px] gap-[53px] ">
      <p className="heading text-[48px] font-freshman ">MEME SUPER BOWL</p>
      <div className="w-full relative h-[596px]">
        <Image src={"/Images/memeBowl.png"} alt="meme bowl" layout="fill" />
      </div>
    </section>
  );
};

export default MemeSuperBowl;
