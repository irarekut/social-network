import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components/header/header";
import { PostsBlock } from "../components/postsBock/postsBock";

export function MainPage() {
  return (
    <Container fluid="true">
      <Header />
      <div className="bg-light bg-gradient vh-300 wh-150">
        <Container>
          <PostsBlock />
        </Container>
      </div>
    </Container>
  );
}
