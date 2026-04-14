import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Lately from "@/components/Lately";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Experience />
        <Lately />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
