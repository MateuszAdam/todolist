export function TodoItem({ completed, id, title, toggleTodo, handleDelete }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}
