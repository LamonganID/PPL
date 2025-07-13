import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';
import BookForm from './BookForm';

const BookManager = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    setMessage('Book added successfully.');
    clearMessageAfterDelay();
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setMessage('Book updated successfully.');
    clearMessageAfterDelay();
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setMessage('Book deleted successfully.');
    clearMessageAfterDelay();
  };

  const editBook = (book) => {
    navigate(`/library/edit/${book.id}`);
  };

  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f9f9f9', padding: 30, borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: 30, fontWeight: '700' }}>Library CRUD App</h1>
      {message && (
        <div style={{ marginBottom: 20, padding: 10, backgroundColor: '#d4edda', color: '#155724', borderRadius: 4, border: '1px solid #c3e6cb' }}>
          {message}
        </div>
      )}
      <BookForm
        addBook={addBook}
        updateBook={updateBook}
        cancelEdit={() => {}}
      />
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
};

export default BookManager;
