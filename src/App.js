import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const editBook = (book) => {
    setEditingBook(book);
  };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f9f9f9', padding: 30, borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: 30, fontWeight: '700' }}>Library CRUD App</h1>
      <BookForm
        addBook={addBook}
        editingBook={editingBook}
        updateBook={updateBook}
        cancelEdit={() => setEditingBook(null)}
      />
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
