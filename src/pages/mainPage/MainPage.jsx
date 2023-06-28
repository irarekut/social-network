import React from "react";
import { Button, Container } from "react-bootstrap";
import { Header } from "../components/header/header";

export function MainPage() {
  return (
    <Container fluid="true">
      <Header />
      <div className="bg-light bg-gradient vh-100 wh-150">
        <Container>
          <Button variant="secondary">lalalala</Button>
        </Container>
      </div>
    </Container>
  );
}
