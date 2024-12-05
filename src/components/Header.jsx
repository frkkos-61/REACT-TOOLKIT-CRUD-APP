import React from "react";
import { Container, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Stack direction="horizontal" className="justify-content-end" gap={3}>
          <NavLink to="/">CRUD</NavLink>
          <NavLink to="/counter">Sayaç</NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Header;
