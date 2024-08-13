import React, { useState } from 'react';
import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <TodoForm addTodo={addTodo} />
      <h2>All Tasks</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <h2>Incomplete Tasks</h2>
      <TodoList
        todos={todos.filter(todo => !todo.completed)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <h2>Completed Tasks</h2>
      <TodoList
        todos={todos.filter(todo => todo.completed)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
