import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";
function ColorSchemesExample() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">abc</Nav.Link>
            <Nav.Link href="/item1">물품화면</Nav.Link>
            <Nav.Link href="/bucket">보관함 화면</Nav.Link>
            <Nav.Link href="/cash">단일 구매 화면</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
