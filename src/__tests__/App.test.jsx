import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import TodoList from '../components/todoList';

describe('ToDo Application', () => {

  test('Проверка HTML разметки', () => {
    const todos = [{ id: 1, text: 'Incomplete Task', completed: false }];
    const toggleTodo = jest.fn();
    const deleteTodo = jest.fn();
  
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
  
    screen.debug(); 
  });

  test('Переключение статуса задачи', () => {
    const todos = [{ id: 1, text: 'Incomplete Task', completed: false }];
    const toggleTodo = jest.fn();
    const deleteTodo = jest.fn();
  
    render(<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />);
  
    // Поиск чекбокса по роли и тексту
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
  
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  test('Удаление задачи', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Add a new task');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'Task to be deleted' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Task to be deleted')).not.toBeInTheDocument();
  });
});
