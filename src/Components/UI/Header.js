import { Fragment } from "react";

import {
  Container,
  Navbar,
  Jumbotron,
  Nav,
  NavItem,
  Button,
  NavbarBrand,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { formLoginActions } from "../../Redux/formLogin";
import "./UI.css";
const Header = (props) => {
  const dispatch = useDispatch();
  const showLogin = () =>{
    dispatch(formLoginActions.showFormLogin())
  }
  return (
    <Fragment>
      <Navbar animation="false" expand="lg" className="navbar-dark">
        <Container>
          <NavbarBrand>
            <NavItem>
              <NavLink className={"nav-link"} to="/home">Ristorante Con Fusion</NavLink>
            </NavItem>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse animation="false" id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={showLogin}>Login</Button>
        </Container>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default Header;
