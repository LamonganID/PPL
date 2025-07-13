import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookEditPage = ({ books, updateBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books.find(book => book.id === Number(id));
  const [message, setMessage] = useState('');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    updateBook({ id: bookToEdit.id, title, author });
    setMessage('Book updated successfully.');
    setTimeout(() => {
      setMessage('');
      navigate('/library');
    }, 2000);
  };

  if (!bookToEdit) {
    return <p>Book not found</p>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20, backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2>Edit Book</h2>
      {message && (
        <div style={{ marginBottom: 20, padding: 10, backgroundColor: '#d4edda', color: '#155724', borderRadius: 4, border: '1px solid #c3e6cb' }}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: 10, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
          required
        />
        <div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: '600', fontSize: 16, marginRight: 10 }}>
            Update
          </button>
          <button type="button" onClick={() => navigate('/library')} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: '600', fontSize: 16 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookEditPage;
