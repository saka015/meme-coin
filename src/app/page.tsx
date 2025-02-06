import Header from "@/components/common/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import History from "@/components/History";
import MemeCoinLeaderBoard from "@/components/MemeCoinLeaderBoard";
import MemeSuperBowl from "@/components/MemeSuperBowl";
import SolanaVsEthereum from "@/components/SolanaVsEthereum";
import WhatIsThisAbout from "@/components/WhatIsThisAbout";

const page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatIsThisAbout />
      <SolanaVsEthereum />
      <MemeCoinLeaderBoard />
      <MemeSuperBowl />
      <History />
      <Footer />
    </>
  );
};

export default page;
