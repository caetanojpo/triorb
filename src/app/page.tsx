import Navbar from "@/components/Navbar";
import Index from "@/components/Banner/HomeBanner";

export default function Home() {
  return (
      <>
          <Navbar/>
          <Index/>
          <div className={'h-screen bg-white '}></div>
      </>
  );
}
