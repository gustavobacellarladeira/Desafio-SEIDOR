import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './style.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav.Link>
        <Link className="logo--container" to="/">
          Desasfio SEIDOR
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
          <Nav.Link>
            <Link to="/Editar">
              <Button variant="outline-warning">Editar</Button>{' '}
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
// <header className="header--container">
//   <nav className="nav--container">
//     <div className="nav-links--container">
//       <Link to="/">Home</Link>

//       <Link to="/CadastroDeUsuario">Cadastrar Usuario</Link>

//       <Link to="/TabelaDeIRRF">Tabela</Link>
//     </div>
//   </nav>
// </header>
