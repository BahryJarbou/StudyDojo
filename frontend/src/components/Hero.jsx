import { NavLink } from "react-router";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-50%" }}
      transition={{ duration: 1.5 }}
      className="hero shadow-2xl shadow-black rounded-4xl w-full"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1581447109200-bf2769116351?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay rounded-4xl lg:px-[36rem] lg:py-[16rem] max-w-full"></div>
      <div className="hero-content text-neutral-content text-center w-full">
        <div className="lg:max-w-xl">
          <h1 className="mb-5 sm:text-md lg:text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-xs lg:text-2xl">
            Turn chaos into clarity with your personal dojo for mastering study
            time. Focus smarter, track better, and study like a pro with
            sessions structured like never before. From tasks to triumphs, you
            can organize your entire learning journey where discipline meets
            productivity. Stay on track, stay motivated, and stay ahead with one
            app that offers endless ways to sharpen your study skills. Study
            smarter, not harder — the dojo way — as you declutter your mind and
            streamline your study life. It’s where focus and learning finally
            find perfect balance.
          </p>
          <NavLink to="signup" className="btn btn-soft btn-success btn-xl">
            Join Now
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
