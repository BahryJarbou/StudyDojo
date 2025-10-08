import { Navigate } from "react-router";
import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import { use } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { loading, user } = use(AuthContext);
  return !loading ? (
    !user ? (
      <div className="flex flex-col gap-12 max-w-full">
        <Hero />
        <FeatureCards />
      </div>
    ) : (
      <Navigate to="/courses" />
    )
  ) : (
    <div className="flex flex-col gap-12 max-w-full">
      <span className=" absolute -translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
    </div>
  );
};

export default Home;
