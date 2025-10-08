import { useParams } from "react-router";
import Flashcards from "./Flashcards";
import DragNotes from "./DragNotes";
import VanishList from "./ToDoList";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Articles from "./Articles";
import { ToDosContext } from "../context/ToDosContext.jsx";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import hostURL from "../server.js";
import Timeline from "./Timeline.jsx";

const CourseContent = () => {
  const { todos, setTodos } = use(ToDosContext);
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log();
  const token = `Bearer ${localStorage.getItem("token")}`;
  useEffect(() => {
    axios
      .get(`${hostURL}/courses/${params.id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setCourse(res.data);
      })
      .catch(console.error)
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-col gap-[2rem] shrink-0 w-[90vw] justify-center items-center">
      <h1 className="text-3xl text-success font-bold">{course.name}</h1>
      {course.spotify && (
        <iframe
          data-testid="embed-iframe"
          style={{ "border-radius": "15px" }}
          src="https://open.spotify.com/embed/playlist/1vHMsTPUu993oyhGROsxnp?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}

      {course.youtube && (
        <div className="w-[90vw] h-[40vw]">
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
          className="tab not-checked:not-hover:not-active:text-white text-success"
          aria-label="Course Info"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="join join-vertical bg-base-100 w-full">
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Course Discription
              </div>
              <div className="collapse-content text-sm whitespace-pre-wrap">
                <Markdown
                  children={`${course.description}`}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        <SyntaxHighlighter
                          {...rest}
                          PreTag="div"
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          style={nord}
                        />
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            </div>
            <div className="collapse collapse-plus  bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-3" />
              <div className="collapse-title font-semibold">To Do</div>
              <div className="collapse-content text-sm">
                <VanishList courseID={params.id} />
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-3" />
              <div className="collapse-title font-semibold">Progress</div>
              <div className="collapse-content text-sm justify-self-center">
                <div className="flex flex-col justify-center items-center gap-[3rem]">
                  <div
                    className="radial-progress text-success"
                    style={
                      {
                        "--value": `${
                          todos.length !== 0
                            ? (todos.filter((todo) => todo.checked).length /
                                todos.length) *
                              100
                            : 0
                        }`,
                        "--size": "12rem",
                        "--thickness": "2rem",
                      } /* as React.CSSProperties */
                    }
                    aria-valuenow={`${
                      todos.length !== 0
                        ? (todos.filter((todo) => todo.checked).length /
                            todos.length) *
                          100
                        : 0
                    }`}
                    role="progressbar"
                  >
                    {`${(todos.length !== 0
                      ? (todos.filter((todo) => todo.checked).length /
                          todos.length) *
                        100
                      : 0
                    ).toFixed(1)}%`}
                  </div>
                  <Timeline todos={todos} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab not-checked:not-hover:not-active:text-white text-success"
          aria-label="Course Content"
        />
        <div className="tab-content  bg-base-100 border-base-300 p-6">
          <div className="join join-vertical bg-base-100 w-full">
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-4" />
              <div className="collapse-title font-semibold">FlashCards</div>
              <div className="collapse-content text-sm">
                <Flashcards courseID={params.id} />
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-4" />
              <div className="collapse-title font-semibold">Notes</div>
              <div className="collapse-content text-sm">
                <DragNotes courseID={params.id} />
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="checkbox" name="my-accordion-4" />
              <div className="collapse-title font-semibold">Articles</div>
              <div className="collapse-content text-sm justify-self-center">
                <Articles courseID={params.id} />
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
