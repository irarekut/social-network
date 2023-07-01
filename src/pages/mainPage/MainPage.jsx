import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header/header";
import { PostsBlock } from "../../components/postsBlock/postsBlock";
import { useGetPostsQuery } from "../../api/api";

export function MainPage() {
  const { data, isLoading } = useGetPostsQuery();
  return (
    <Container fluid="true">
      <Header />
      <div
        style={{ minHeight: "100vh" }}
        className="bg-light bg-gradient wh-150"
      >
        <Container className="vh-150">
          <PostsBlock data={data} isLoading={isLoading} />
        </Container>
      </div>
    </Container>
  );
}
