import Navbar from "@/components/Navbar/navbar";
import HomeBanner from "@/components/Banner/HomeBanner/homeBanner";
import Services from "@/components/Services/services";
import Projects from "@/components/Projects/projects";

export default function Home() {
  return (
      <>
          <Navbar/>
          <HomeBanner/>
          <Services />
          <Projects />
          <div className={'h-screen bg-gray-300 '}></div>
      </>
  );
}
