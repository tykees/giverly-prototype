import Browser from "@/components/Browser";
import Calculator from "@/components/Calculator";
import Causes from "@/components/Causes";
import Donation from "@/components/Donation";
import Download from "@/components/Download";
import { Header } from "@/components/Header";
import News from "@/components/News";
import Select from "@/components/Select";
import Shop from "@/components/Shop";
import Stores from "@/components/Stores";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
    <Header/>
    <News/>
    <Select/>
    <Shop/>
    <Donation/>
    <Download/>
    <Stores/>
    <Browser/>
    <Causes/>
    <Calculator/>
    </main>
  );
}
