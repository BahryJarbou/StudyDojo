import { useParams } from "react-router";
import Flashcards from "./Flashcards";
import DragNotes from "./DragNotes";
import VanishList from "./ToDoList";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseContent = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses/${params.id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch(console.error)
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col gap-[2rem] shrink-0 w-[98vw] justify-center items-center">
      <h1 className="text-3xl text-primary font-bold">{course.name}</h1>
      {course.youtube && (
        <div className="w-[90vw] h-[45vw]">
          <iframe
            width="100%"
            height="100%"
            src={`${course.youtube}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}
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
              <div className="collapse-content text-sm whitespace-pre-wrap">
                {course.description}
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">To Do</div>
              <div className="collapse-content text-sm">
                <VanishList courseID={params.id} />
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
                <Flashcards courseID={params.id} />
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
    </div>
  ) : (
    <span className=" absolute translate-1/2 top-[50%] left-[50%] loading loading-spinner loading-xl"></span>
  );
};

export default CourseContent;
