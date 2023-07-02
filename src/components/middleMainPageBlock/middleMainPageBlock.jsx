import React, { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../api/api";
import { Container } from "react-bootstrap";
import { PostsBlock } from "../postsBlock/postsBlock";
import { PaginationBlock } from "../pagination.jsx/pagination";

export const MiddleMainPageBlock = () => {
  const [loading, setLoading] = useState(true);
  const [dataPosts, setDataPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const { data, isLoading } = useGetPostsQuery();

  useEffect(() => {
    setDataPosts(data);
    setLoading(isLoading);
  }, [data]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let currentPosts = [];
  let totalPosts;

  if (typeof dataPosts !== "undefined") {
    currentPosts = dataPosts.slice(firstPostIndex, lastPostIndex);
    totalPosts = dataPosts.length;
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    setCurrentPage((next) => next + 1);
  };
  const prevPage = () => {
    if (currentPage >= 2) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="bg-light bg-gradient wh-150">
      <Container>
        <PostsBlock
          data={currentPosts}
          isLoading={loading}
          isLoadingUser={false}
        />
        <PaginationBlock
          postsPerPage={postsPerPage}
          totalPosts={totalPosts || 1}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Container>
    </div>
  );
};
