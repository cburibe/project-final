import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import { AiOutlineSetting } from 'react-icons/ai';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
export const Menu = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Turismo Social</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

{/* <nav className="navbar">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand  h1 spanNav ms-4">Turismo Social</span>
				</Link>

				<Link to="/config">
					<span className="fs-4 " style={{ color: "#94d1be" }}><AiOutlineSetting /></span>
				</Link>
			</div>
		</nav > */}

{/* 				<div className="ml-auto">

					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}