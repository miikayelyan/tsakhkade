import AuraDining from "./components/AuraDining/AuraDining";
import Hero from "./components/Hero/Hero";
import OurStory from "./components/OurStory/OurStory";
import HotelPreview from "@/app/components/HotelPreview/HotelPreview";

const Home = async () => {
  return (
    <>
      <Hero />
      <OurStory />
      <HotelPreview />
      <AuraDining />
    </>
  );
};

export default Home;
