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
import { Link, NavLink, useLocation } from 'react-router-dom';

const AppHeader = () => {

    const location = useLocation();
    const { pathname } = location; //gets the current path
    const { pages, converters, conversionInfo, switchConverter } = useContext(DataProvider);

    const checkPath = () => {
        if (pathname === '/c' || pathname === '/d') {
            return true;
        }
        return false;
    }

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
                                <Nav.Link key={pages[0]?.id}><NavLink className="app__header__navlinks" style={{
                                    color: checkPath() ? 'var(--primary-clr)' : 'var(--t-shade2)'
                                }} to={pages[0]?.path}>{pages[0]?.name}</NavLink></Nav.Link>
                                {pages.filter(item => item?.path !== "/").map(item => <Nav.Link key={item?.id}><NavLink className="app__header__navlinks" style={({ isActive }) => ({
                                    color: isActive ? 'var(--primary-clr)' : 'var(--t-shade2)'
                                })} to={item?.path}>{item?.name}</NavLink></Nav.Link>)}
                                <NavDropdown
                                    title={conversionInfo?.name}
                                    id={`offcanvasNavbarDropdown-expand-${"md"}`}
                                    className="app__header__conversionSwitch mx-3"
                                >
                                    {converters.map(item => <NavDropdown.Item key={item?.name} onClick={() => switchConverter(item?.name)}>{item?.name}</NavDropdown.Item>)}
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