import React from 'react';

const BookList = ({ books, editBook, deleteBook }) => {
  if (books.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666', fontSize: 18 }}>No books available. Please add some.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: 6, overflow: 'hidden' }}>
      <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
        <tr>
          <th style={{ padding: 12, textAlign: 'left' }}>Title</th>
          <th style={{ padding: 12, textAlign: 'left' }}>Author</th>
          <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.id} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white' }}>
            <td style={{ padding: 12 }}>{book.title}</td>
            <td style={{ padding: 12 }}>{book.author}</td>
            <td style={{ padding: 12, textAlign: 'center' }}>
              <button
                onClick={() => editBook(book)}
                style={{
                  marginRight: 10,
                  padding: '6px 12px',
                  backgroundColor: '#ffc107',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: '#212529',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e0a800')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#ffc107')}
              >
                Edit
              </button>
              <button
                onClick={() => deleteBook(book.id)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#dc3545',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: 'white',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = '#bb2d3b')}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = '#dc3545')}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
