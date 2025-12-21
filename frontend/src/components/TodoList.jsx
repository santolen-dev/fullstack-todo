import TodoItem from './TodoItem'
import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE = "https://fullstack-todo-santo-oe07.onrender.com";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/todos`)
      .then(res => setTodos(res.data))
      .catch(err => console.error("Error fetching todos:", err));
  }, []);

  return (
    <div>
      {todos.map(todo => <p key={todo.id}>{todo.text}</p>)}
    </div>
  );
}



function TodoList({ todos, onToggleComplete, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <i className="bi bi-inbox"></i>
        <h4>No todos found</h4>
        <p>Add a new todo to get started!</p>
      </div>
    )
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList

