import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav/NavBar";
import HeaderVideo from "@/components/header/HeaderVideo";
import RowTour from "@/components/Tour/RowTour ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeaderVideo />
      <RowTour />
    </div>
  );
}
