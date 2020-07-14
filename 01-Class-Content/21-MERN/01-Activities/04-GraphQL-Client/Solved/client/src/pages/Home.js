import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BOOKS } from '../utils/queries';
import BookList from '../components/BookList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <BookList books={books} />}</div>
    </main>
  );
};

export default Home;
