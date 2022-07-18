import MenuComponent from "../Components/MenuComponent";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import { data } from "../Data/Data";
import { COMMENTS } from "../Data/Comment";
import { LEADERS } from "../Data/Leaders";
import { PROMOTIONS } from "../Data/Promotions";
import Home from "./Pages/Home";
import DishDetail from "./DishDetail";
const Main = () => {
  const dishShowHome = data[0];
  const promotionsShowHome = PROMOTIONS[0];
  const leadersShowHome = LEADERS[0]
  console.log(dishShowHome, promotionsShowHome, leadersShowHome)
  return (
    <Fragment>
      <Header />

      <Container>
        <Switch>
          <Route path={"/menu"} exact>
            <MenuComponent />
          </Route>
          <Route path ={"/menu/:dishID"}>
            <DishDetail />
          </Route>
          <Route path={"/contactus"}>
            <Contact />
          </Route>

          <Route path={"/home"}>
            <Home dish={dishShowHome} promotion = {promotionsShowHome} leader = {leadersShowHome} />
          </Route>
        </Switch>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Main;
