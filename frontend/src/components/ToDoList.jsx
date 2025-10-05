import { useEffect, useState } from "react";
import Todos from "./toDos";
import Form from "./toDoForm";
import Header from "./toDoHeader";
import axios from "axios";

const VanishList = ({ courseID }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos", {
        headers: { course: courseID },
      })
      .then((res) => setTodos(res.data))
      .catch(console.error);
  }, []);

  const handleCheck = (id) => {
    axios
      .put(`http://localhost:3000/todos/${id}`, {
        checked: !todos.find((t) => t._id === id).checked,
      })
      .then(() => {})
      .catch(console.error);
    setTodos((pv) =>
      pv.map((t) => (t._id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const removeElement = (id) => {
    axios
      .delete(`http://localhost:3000/todos/${id}`)
      .then((res) => console.log(res.data))
      .catch(console.error);
    setTodos((pv) => pv.filter((t) => t._id !== id));
  };

  return (
    <section
      className="relative min-h-full shrink-0 bg-zinc-950 py-24"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="mx-auto w-full max-w-xl px-4">
        <Header />
        <Todos
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
      </div>
      <Form setTodos={setTodos} courseID={courseID} />
    </section>
  );
};

export default VanishList;
