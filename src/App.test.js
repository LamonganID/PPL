import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Login and ToDoList critical-path tests', () => {
  test('renders login page initially', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('shows error on invalid login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/invalid username or password/i)).toBeInTheDocument();
  });

  test('redirects to todo page on successful login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/to-do list/i)).toBeInTheDocument();
  });

  test('can add, toggle, and delete tasks in todo list', () => {
    render(
      <MemoryRouter initialEntries={['/todo']}>
        <App />
      </MemoryRouter>
    );

    // Add task
    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    fireEvent.change(input, { target: { value: 'Test Task' } });
    fireEvent.click(addButton);
    expect(screen.getByText('Test Task')).toBeInTheDocument();

    // Toggle task
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(screen.getByText('Test Task')).toHaveStyle('text-decoration: line-through');

    // Delete task
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
  });
});
