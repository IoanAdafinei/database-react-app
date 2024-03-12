import logo_full from "./images/full_logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/headerStyle.css";

function CollapsibleExample() {
  const path = window.location.pathname;

  if (path.search("/admin") !== -1)
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/admin">
            <img alt="logo" src={logo_full} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Authors" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/admin/autori">
                  List of Authors
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/searchbyauthor">
                  Search by Author
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/addauthor">
                  Add author
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/listbyauthorcountry">
                  List By Author Country
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Books" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/admin/books">
                  List of Books
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/listbygenre">
                  List by genre
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/addbook">
                  Add book
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/searchbyclient">
                  Search by Client
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reviews" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/admin/reviews">
                  Review list by book
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/clientreviews">
                  Review list by client
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/reviewsaverage">
                  Average Review
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/fullreview">
                  Reviews
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admin/reviewsoveraverage">
                  Best reviewed
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Orders" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/admin/orders">
                  Orders list
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/reviewsaverage">
                  Average Review
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/addbook">
                  Add book
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/">
                User interface
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img alt="logo" src={logo_full} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">List of Authors</Nav.Link>
            <Nav.Link href="#">Search by Author</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/admin">
              Admin interface
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
