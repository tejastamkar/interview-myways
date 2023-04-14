import React from "react";
import Nav from "react-bootstrap/Nav";
function Navbar() {
  return (
    <Nav
      activeKey="/"
      
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/foodlist">Food List</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
