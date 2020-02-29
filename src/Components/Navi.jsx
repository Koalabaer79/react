import React from 'react';

// ract-bootstrap components
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/logo.png';
import data from './Pages';

function Navi() {
   
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><img src={Logo} alt="Logo u-php" /></Navbar.Brand>
                <Nav className="mr-auto">
                {data.map(function (item, idx) {
                    return <Nav.Link key={idx} href={item.path}>{item.display}</Nav.Link>
                })}
                   
                </Nav>
            </Navbar>
        )
    
}

export default Navi;