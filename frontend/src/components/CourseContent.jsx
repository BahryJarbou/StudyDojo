import CardStack from "./CardStack";
import DragNotes from "./DragNotes";
import VanishList from "./ToDoList";

const CourseContent = () => {
  const courseInfo = {
    description: "I’m currently taking a beginner JavaScript course,",
  };
  return (
    <div className="tabs shrink-0 w-[97vw] tabs-lift px-4">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab w-[50%] bg-base-300"
        aria-label="Course Info"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="join join-vertical bg-base-100 w-full">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">
              Course Discription
            </div>
            <div className="collapse-content text-sm">
              {courseInfo.description}
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">To Do</div>
            <div className="collapse-content text-sm">
              <VanishList />
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
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab w-[50%] bg-base-300"
        aria-label="Course Content"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <div className="join join-vertical bg-base-100 w-full">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">FlashCards</div>
            <div className="collapse-content text-sm">
              <CardStack />
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">Notes</div>
            <div className="collapse-content text-sm">
              <DragNotes />
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
      </div>
    </div>
  );
};

export default CourseContent;
