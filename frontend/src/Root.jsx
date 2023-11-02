import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Root = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-secondary bg-gradient">
                <Navbar collapseOnSelect expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand onClick={() => navigate("/")}>Employee Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="me-auto">
                                <Nav.Link>Features</Nav.Link>
                                <Nav.Link>Pricing</Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link onClick={() => navigate("/signup")}>Sign Up</Nav.Link>
                                <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className={"vh-100 bg-secondary"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;