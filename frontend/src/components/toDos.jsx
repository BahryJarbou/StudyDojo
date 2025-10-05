import { AnimatePresence } from "framer-motion";
import Todo from "./toDo";

const Todos = ({ todos, handleCheck, removeElement }) => {
  return (
    <div className="w-full space-y-3">
      <AnimatePresence>
        {todos.map((t) => (
          <Todo
            handleCheck={handleCheck}
            removeElement={removeElement}
            id={t._id}
            key={t._id}
            checked={t.checked}
            time={t.time}
            unit={t.unit}
          >
            {t.content}
          </Todo>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
