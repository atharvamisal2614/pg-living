import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LifestyleSection from "@/components/LifestyleSection";
import StatsSection from "@/components/StateSection";
import FindYourTribeSection from "@/components/FindYourTribeSection";
import LiveYourWay from "@/components/LiveYourWay";
import Properties from "@/components/Properties";
import NewBanner from "@/components/NewBanner";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
 <>
 
  <Hero />
  <LifestyleSection />
  <StatsSection />
  <FindYourTribeSection />
  <LiveYourWay />
  <Properties/>
  <NewBanner />
  <CommunitySection />
  <Footer />
 </>
  );
}
