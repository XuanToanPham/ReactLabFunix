
import MenuComponent from "../Components/MenuComponent"
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Fragment } from "react";
const Main = () => {
  return (
    <Fragment>
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>

      <Container>
        <MenuComponent />
      </Container>
    </Fragment>
  );
};

export default Main;
