import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MiddleUserPageBlock } from "../../components/middleUserPageBlock/middleUserPageBlock";

export function UserPage() {
  const id = useParams().id;

  return (
    <Container fluid="true">
      <div
        style={{ minHeight: "100vh" }}
        className="bg-light bg-gradient wh-150"
      >
        <MiddleUserPageBlock id={id} />
      </div>
    </Container>
  );
}
