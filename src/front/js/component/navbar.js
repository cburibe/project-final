import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { AiOutlineSetting } from "react-icons/ai";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
export const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Turismo Social</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/recommendedhotels">Hoteles recomendados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/config">
            <span className="fs-4 iconConfig" style={{ color: "black" }}>
              <AiOutlineSetting />
            </span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

{
  /* <nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand  h1 spanNav ms-4">Turismo Social</span>
				</Link>

				<Link to="/config">
					<span className="fs-4 " style={{ color: "#94d1be" }}><AiOutlineSetting /></span>
				</Link>
			</div>
		</nav > */
}

{
  /* 				<div className="ml-auto">

					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */
}
