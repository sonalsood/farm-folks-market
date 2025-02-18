import Hero from "../../components/Hero/Hero";
import Purpose from "../../components/Purpose/Purpose";
import Testimonials from "../../components/Testimonials/Testimonials";
import RandomVendors from "../../components/RandomVendors/RandomVendors";

const HomePage = ({ vendors, fetchVendors }) => {
  return (
    <>
      <Hero />
      <Purpose />
      <Testimonials />
      <RandomVendors vendors={vendors} fetchVendors={fetchVendors} />
    </>
  );
};

export default HomePage;
