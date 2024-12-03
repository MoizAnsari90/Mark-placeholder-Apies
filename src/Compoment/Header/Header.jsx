import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MarkPlaceHolder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Api" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://api-back-end-two.vercel.app/post">posts</NavDropdown.Item>
              <NavDropdown.Item href="https://api-back-end-two.vercel.app/comment">
                comments
              </NavDropdown.Item>
              <NavDropdown.Item href="https://api-back-end-two.vercel.app/album">albums</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                photos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                users
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;