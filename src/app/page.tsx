import Navbar from "@/components/Navbar/navbar";
import HomeBanner from "@/components/Banner/HomeBanner/homeBanner";
import Services from "@/components/Services/services";
import Projects from "@/components/Projects/projects";
import Testimonials from "@/components/Testimonials/testimonials";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
      <>
          <Navbar/>
          <HomeBanner/>
          <Services />
          <Projects />
          <Testimonials/>
          <Footer/>
      </>
  );
}
