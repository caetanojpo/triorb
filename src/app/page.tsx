import Navbar from "@/components/Navbar/navbar";
import HomeBanner from "@/components/Banner/HomeBanner/homeBanner";

export default function Home() {
  return (
      <>
          <Navbar/>
          <HomeBanner/>
          <div className={'h-screen bg-gray-300 '}></div>
      </>
  );
}
