import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          aria-label={todo.text}
        />
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);


export default TodoList;
