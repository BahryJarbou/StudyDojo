import { useState } from "react";
const AddToDo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return alert("Please enter a to-do item");
    setTodos((prevTodos) => [
      { id: Date.now(), text: newTodo, completed: false },
      ...prevTodos,
    ]);
    localStorage.setItem("todos", JSON.stringify(todos));
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button type="submit" className="btn btn-soft btn-success">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
