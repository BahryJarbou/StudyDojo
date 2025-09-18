import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <FeatureCards />
    </div>
  );
};

export default Home;
