import Image from "next/image";
import Hero from "./components/Hero";
import Libary from "./libarys/page";

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] text-white">
      <Hero/>
      <Libary/>
    </div>
  );
}
