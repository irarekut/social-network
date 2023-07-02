import React from "react";
import { Container, Pagination } from "react-bootstrap";

export const PaginationBlock = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Pagination>
        <Pagination.Prev onClick={() => props.prevPage()} />
        {pageNumbers.map((number) => (
          <Pagination.Item onClick={() => props.paginate(number)} key={number}>
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => props.nextPage()} />
      </Pagination>
    </Container>
  );
};
