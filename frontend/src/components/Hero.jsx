const Hero = () => {
  return (
    <div
      className="hero shadow-2xl shadow-black rounded-4xl lg:max-w-screen sm:max-w-sm md:max-w-md"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1581447109200-bf2769116351?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay rounded-4xl lg:px-[36rem] lg:py-[16rem] lg:max-w-screen sm:max-w-sm md:max-w-md"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl ">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
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
          <button className="btn btn-soft btn-success btn-xl">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
