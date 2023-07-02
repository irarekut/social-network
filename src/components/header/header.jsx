import React from "react";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary fixed-top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Меню" id="basic-nav-dropdown">
              <Container className="text-center">
                <Image
                  style={{ width: "120px", height: "120px" }}
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1687963430~exp=1687964030~hmac=d029babde8522e478989ec9c0abb2d645b29f96393c0505377cd84bbdb2e6c1b"
                  roundedCircle
                />
                <NavDropdown.Item href="/personal">Ира</NavDropdown.Item>
                <Container>ira@gmail.com</Container>
              </Container>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Список постов</NavDropdown.Item>
              <NavDropdown.Item href="personal">Обо мне</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
