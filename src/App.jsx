import { useEffect, useState } from "react";
import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { TodoDashboard } from "./TodoDashboard";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Todo Dashboard
        </Link>
        <Link to="/counter" className="nav-item" style={{ margin: 15 }}>
          Counter
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <TodoDashboard
              addTodo={addTodo}
              todos={todos}
              toggleTodo={toggleTodo}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/counter" element={<Counter initialCount={0} />} />
      </Routes>
    </>
  );
}
