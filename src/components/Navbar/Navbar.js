import {
  NavDropdown,
  Navbar as NavbarBs,
  Nav,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import { useContextTranslate } from "../../context/ContextAPI";

const Navbar = () => {
  const { contant, changeLanguage, changeLanguage2 } = useContextTranslate();

  return (
    <Container>
      <NavbarBs
        expand="lg"
        variant=""
        className={`radius-border py-2 px-3 position-absolute bg-opacity `}
      >
        <Container>
          <NavbarBs.Brand href="/">
            <img src={Logo} alt="Logo" />
          </NavbarBs.Brand>
          <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBs.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} className="fs-5 fw-bold px-3" to="/">
                {contant.n1}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="fs-5 fw-bold px-3"
                to="services"
              >
                {contant.n2}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="fs-5 fw-bold px-3"
                to="projects"
              >
                {contant.n3}
              </Nav.Link>
              <Nav.Link as={NavLink} className="fs-5 fw-bold px-3" to="about">
                {contant.n4}
              </Nav.Link>
              <Nav.Link as={NavLink} className="fs-5 fw-bold px-3" to="contact">
                {contant.n5}
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                title={<GrLanguage size={30} />}
                id="collasible-nav-dropdown text-black"
              >
                <NavDropdown.Item onClick={() => changeLanguage()}>
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    changeLanguage2();
                  }}
                >
                  العربية
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>
    </Container>
  );
};

export default Navbar;
