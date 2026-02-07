import AppSection from "@/components/section/app/app";
import BlogSection from "@/components/section/blog/blog";
import EquipmentSection from "@/components/section/equipments/equipments";
import Banner from "@/components/section/hero/hero";
import HomeSection from "@/components/section/homeService/homeService";
import HowWeWork from "@/components/section/howWorking/howWorking";
import ServicesSection from "@/components/section/serviceSwiper/service";
import ServiceUpperSwiper from "@/components/section/serviceUpperSwiper/serviceUpperSwiper";
import TeamSection from "@/components/section/team/team";
import TestimonialsSection from "@/components/section/testimonials/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner/>
    <ServiceUpperSwiper/>
    <ServicesSection/>
    <HomeSection/>
    <HowWeWork/>
    <EquipmentSection/>
    <TestimonialsSection/>
    <TeamSection/>
    <BlogSection/>
    <AppSection/>
    </>
  );
}
