import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header/header";
import { AboutUserBlock } from "../../components/aboutUserBlock/aboutUserBlock";

export function PersonalPage() {
  return (
    <Container fluid="true">
      <Header />
      <div className="bg-light bg-gradient vh-100 wh-200">
        <AboutUserBlock
          name="Ира Рекуть"
          info="Люблю читать, воспитываю кота или он меня, зависит от точки зрения."
          isLoading="false"
        />
      </div>
    </Container>
  );
}
