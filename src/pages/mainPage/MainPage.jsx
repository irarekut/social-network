import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header/header";
import { MiddleMainPageBlock } from "../../components/middleMainPageBlock/middleMainPageBlock";

export function MainPage() {
  return (
    <Container className="mb-5" fluid="true">
      <Header />
      <MiddleMainPageBlock />
    </Container>
  );
}
