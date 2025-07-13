import React, { useState, useEffect } from 'react';

const BookForm = ({ addBook, editingBook, updateBook, cancelEdit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
    } else {
      setTitle('');
      setAuthor('');
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    if (editingBook) {
      updateBook({ ...editingBook, title, author });
    } else {
      addBook({ title, author });
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 30, display: 'flex', justifyContent: 'space-between', gap: 10 }}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 10, flex: 1, borderRadius: 4, border: '1px solid #ccc', fontSize: 16 }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ padding: 10, flex: 1, borderRadius: 4, border: '1px solid #ccc', fontSize: 16 }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: 16,
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        {editingBook ? 'Update' : 'Add'}
      </button>
      {editingBook && (
        <button
          type="button"
          onClick={cancelEdit}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 16,
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#5a6268')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#6c757d')}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default BookForm;
