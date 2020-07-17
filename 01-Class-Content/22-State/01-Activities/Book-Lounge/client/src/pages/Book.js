import React from 'react';
import { Card, CardText, CardHeader, CardSubtitle, CardBody } from 'reactstrap';

function Book(book) {
  const { title, author, pages } = book;

  return (
    <div>
      <Card outline color='secondary'>
        <CardHeader tag='h3'>Title: {title}</CardHeader>
        <CardBody>
          <CardSubtitle>Author: {author}</CardSubtitle>
          <CardText># of Pages: {pages}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Book;
