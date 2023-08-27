import Header from "@/components/Header";
import Trend from "@/components/Trend";
import WhyShooseUs from "@/components/WhyShooseUs";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import '@/styles/globals.css';
import '@/styles/app.css';

const page = () => {
  return (
    <>
      <Header />
      <main>
        <Trend />
        <WhyShooseUs />
        <Map />
      </main>
      <Footer />
    </>
  )
}

export default page