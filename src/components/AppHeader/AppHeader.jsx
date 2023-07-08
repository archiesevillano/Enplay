import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Brand from '../Brand/Brand';
import "./AppHeader.css";
import { useContext, useState } from 'react';
import { DataProvider } from '../../AppData';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {

    const { pages, converters } = useContext(DataProvider);

    return (
        <header className="app__header">
            <Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3">
                <Container>
                    <Brand />
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${"md"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {pages.map(item => <Nav.Link key={item?.id}><NavLink className="app__header__navlinks" style={({ isActive }) => ({
                                    color: isActive ? 'var(--primary-clr)' : 'var(--t-shade2)'
                                })} to={item?.path}>{item?.name}</NavLink></Nav.Link>)}
                                <NavDropdown
                                    title="Conversion"
                                    id={`offcanvasNavbarDropdown-expand-${"md"}`}
                                    className="app__header__conversionSwitch mx-3"
                                >
                                    {converters.map(item => <NavDropdown.Item>{item?.name}</NavDropdown.Item>)}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default AppHeader;