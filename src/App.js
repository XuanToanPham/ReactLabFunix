
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import MenuComponent from "./Components/MenuComponent";
function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>

      <Container>
        <MenuComponent/>
      </Container>
    </div>
  );
}

export default App;
