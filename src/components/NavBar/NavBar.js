import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './style.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav.Link>
        <Link className="logo--container" to="/">
          DESAFIO SEIDOR
        </Link>
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link>
            <Link to="/CadastroDeUsuario">
              <Button variant="outline-success">Cadastrar Usuario</Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/TabelaDeIRRF">
              <Button variant="outline-light">Tabela</Button>
            </Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
