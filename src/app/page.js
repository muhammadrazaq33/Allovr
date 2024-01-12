import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Wallet from "./components/Wallet";
import Stake from "./components/Stake";
import StakeAction from "./components/StakeAction";
import Work from "./components/Work";
import StakingPools from "./components/StakingPools";
import data from "./data.js";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[black]">
      <Navbar />
      <Hero />
      <Wallet />
      <Stake />
      <StakeAction />
      <Work />
      <StakingPools data={data} />
      <Footer />
    </main>
  );
}
