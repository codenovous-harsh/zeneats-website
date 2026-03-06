import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubheadBanner from "@/components/SubheadBanner";
// import StatsCounter from "@/components/StatsCounter";
// import LogoMarquee from "@/components/LogoMarquee";
import BigCardsSection from "@/components/BigCardsSection";
// import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";

export default function Home() {
  return (
    <AnimationProvider>
      <main>
        <Navbar />
        <Hero />
        <SubheadBanner />
        {/* <StatsCounter /> */}
        {/* <LogoMarquee /> */}
        <BigCardsSection />
        {/* <Testimonials /> */}
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </AnimationProvider>
  );
}
