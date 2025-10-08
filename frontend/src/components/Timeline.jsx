const Timeline = ({ todos }) => {
  return (
    <div>
      <ul className={`timeline not-lg:not-md:timeline-vertical`}>
        {todos.map((todo, index) => {
          return index % 2 === 0 ? (
            <li key={todo._id}>
              {index !== 0 && (
                <hr className={`${todo.checked && "bg-success"}`} />
              )}
              <div className="timeline-start timeline-box">{todo.content}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {index !== todos.length - 1 && (
                <hr className={`${todo.checked && "bg-success"}`} />
              )}
            </li>
          ) : (
            <li key={todo._id}>
              <hr className={`${todo.checked && "bg-success"}`} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">{todo.content}</div>
              {index !== todos.length - 1 && (
                <hr className={`${todo.checked && "bg-success"}`} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
