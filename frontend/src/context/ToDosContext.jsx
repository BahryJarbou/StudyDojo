import { createContext, useState } from "react";

const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return <ToDosContext value={{ todos, setTodos }}>{children}</ToDosContext>;
};

export { ToDosContext, ToDosProvider };
