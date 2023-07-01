import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components/header/header";
import { PostsBlock } from "../components/postsBlock/postsBlock";

export function MainPage() {
  return (
    <Container fluid="true">
      <Header />
      <div style={{ height: "100vh" }} className="bg-light bg-gradient wh-150">
        <Container className="vh-150">
          <PostsBlock />
        </Container>
      </div>
    </Container>
  );
}
