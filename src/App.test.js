import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders Library CRUD App heading', async () => {
  render(<App />);
  const headingElement = await screen.findByText(/Library CRUD App/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a book with valid inputs', async () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/Book Title/i);
  const authorInput = screen.getByPlaceholderText(/Author/i);
  const addButtons = screen.getAllByRole('button', { name: /Add/i });
  const addButton = addButtons[0];

  fireEvent.change(titleInput, { target: { value: 'Test Book' } });
  fireEvent.change(authorInput, { target: { value: 'Test Author' } });
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
  });
});

test('prevents adding a book with empty inputs', async () => {
  render(<App />);
  const addButtons = screen.getAllByRole('button', { name: /Add/i });
  const addButton = addButtons[0];
  fireEvent.click(addButton);

  const noBooksMessage = await screen.findByText(/No books available. Please add some./i);
  expect(noBooksMessage).toBeInTheDocument();
});

test('edits a book and updates details', async () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/Book Title/i);
  const authorInput = screen.getByPlaceholderText(/Author/i);
  const addButtons = screen.getAllByRole('button', { name: /Add/i });
  const addButton = addButtons[0];

  // Add a book first
  fireEvent.change(titleInput, { target: { value: 'Original Title' } });
  fireEvent.change(authorInput, { target: { value: 'Original Author' } });
  fireEvent.click(addButton);

  // Click edit button
  const editButtons = screen.getAllByRole('button', { name: /Edit/i });
  const editButton = editButtons[0];
  fireEvent.click(editButton);

  // Change title and author
  fireEvent.change(titleInput, { target: { value: 'Updated Title' } });
  fireEvent.change(authorInput, { target: { value: 'Updated Author' } });

  // Click update button
  const updateButton = screen.getByRole('button', { name: /Update/i });
  fireEvent.click(updateButton);

  await waitFor(() => {
    expect(screen.getByText('Updated Title')).toBeInTheDocument();
    expect(screen.getByText('Updated Author')).toBeInTheDocument();
  });
});

test('cancels editing a book', async () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/Book Title/i);
  const authorInput = screen.getByPlaceholderText(/Author/i);
  const addButtons = screen.getAllByRole('button', { name: /Add/i });
  const addButton = addButtons[0];

  // Add a book first
  fireEvent.change(titleInput, { target: { value: 'Book to Edit' } });
  fireEvent.change(authorInput, { target: { value: 'Author' } });
  fireEvent.click(addButton);

  // Click edit button
  const editButton = screen.getByRole('button', { name: /Edit/i });
  fireEvent.click(editButton);

  // Click cancel button
  const cancelButton = screen.getByRole('button', { name: /Cancel/i });
  fireEvent.click(cancelButton);

  await waitFor(() => {
    expect(titleInput.value).toBe('');
    expect(authorInput.value).toBe('');
  });
});

test('deletes a book', async () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/Book Title/i);
  const authorInput = screen.getByPlaceholderText(/Author/i);
  const addButtons = screen.getAllByRole('button', { name: /Add/i });
  const addButton = addButtons[0];

  // Add a book first
  fireEvent.change(titleInput, { target: { value: 'Book to Delete' } });
  fireEvent.change(authorInput, { target: { value: 'Author' } });
  fireEvent.click(addButton);

  // Click delete button
  const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
  const deleteButton = deleteButtons[0];
  fireEvent.click(deleteButton);

  const noBooksMessage = await screen.findByText(/No books available. Please add some./i);
  expect(noBooksMessage).toBeInTheDocument();
});
