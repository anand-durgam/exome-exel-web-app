import './header.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {   

    return(
        <div className='header-container'>
        <Link to="/">
            <img className='header-image' src='http://183.82.120.80:9999/elspl-logo.jpg' alt='company' />
        </Link>
        <div className='navbar-container'>
            <Navbar  bg="" expand="lg" >
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto">
                <Nav.Link href="/languages" className='navbar-link'>Languages</Nav.Link>
                <Nav.Link href="/crop-names" className='navbar-link'>Crop Names</Nav.Link>
                <Nav.Link href="/crop-recommendation" className='navbar-link'>Crop Recommendation</Nav.Link>
                <Nav.Link href="/order-details" className='navbar-link'>Order Details</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
         </div>
    )
}

export default Header