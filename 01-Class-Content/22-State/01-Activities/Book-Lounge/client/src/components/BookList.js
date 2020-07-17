import React from 'react';
import Book from '../pages/Book';

const BookList = ({ books }) => {
  if (!books.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book._id}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

export default BookList;
