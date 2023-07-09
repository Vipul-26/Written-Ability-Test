import React from "react";
import { Navbar } from "react-bootstrap";
import Avatar from "react-avatar";

const NavBarComponent = ({ data }) => {
  return (
    <Navbar className="justify-content-between" bg="dark" variant="dark">
      <Navbar.Brand>Written Ability Test</Navbar.Brand>
      <Avatar name={data} size="40" round={true} />
    </Navbar>
  );
}

export default NavBarComponent;
