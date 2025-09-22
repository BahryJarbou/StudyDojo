import ToDo from "./ToDo";

const CourseContent = () => {
  const courseInfo = {
    description:
      "I’m currently taking a beginner JavaScript course, and so far it’s been a smooth entry into coding. At the start, we learned what JavaScript is and how it connects with HTML and CSS. Right now, I’m practicing the basics—things like variables, functions, loops, and conditionals. It’s a bit challenging at times, but the exercises help me get the hang of it. Each week, I’m building up my skills with small projects. For example, I’ve already worked on simple scripts that change text and colors on a webpage, and soon I’ll be diving deeper into handling user input and events. The upcoming lessons will focus more on the Document Object Model (DOM), which should let me make web pages respond in real time. The course is very hands-on, so I’m constantly coding, debugging, and experimenting. As it continues, I expect to create mini projects like a quiz game, a digital clock, or even a to-do list app. Little by little, I can see myself moving from just learning concepts to actually building interactive features.Even though I’m still in the middle of it, I already feel more confident reading and writing JavaScript. I’m excited to see how my skills develop by the end of the course.",
  };
  return (
    <div className="tabs min-w-screen tabs-lift px-4">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab w-[50%]"
        aria-label="Course Info"
        defaultChecked
      />

      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">Course Discription</div>
          <div className="collapse-content text-sm">
            {courseInfo.description}
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">To Do</div>
          <div className="collapse-content text-sm">
            <ToDo />
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">Progress</div>
          <div className="collapse-content text-sm justify-self-center">
            <div
              className="radial-progress text-success"
              style={
                {
                  "--value": "70",
                  "--size": "12rem",
                  "--thickness": "2rem",
                } /* as React.CSSProperties */
              }
              aria-valuenow={70}
              role="progressbar"
            >
              70%
            </div>
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab w-[50%]"
        aria-label="Course Content"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
