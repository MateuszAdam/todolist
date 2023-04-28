import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export function TodoDashboard({ addTodo, todos, toggleTodo, handleDelete }) {
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}
