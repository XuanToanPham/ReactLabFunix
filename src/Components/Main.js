import MenuComponent from "../Components/MenuComponent";
import { Container } from "react-bootstrap";
import { Fragment } from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./Pages/Contact";
import { data } from "../Data/Data";
import { LEADERS } from "../Data/Leaders";
import { PROMOTIONS } from "../Data/Promotions";
import Home from "./Pages/Home";
import DishDetail from "./DishDetail";
import { useSelector } from "react-redux";
const Main = (props) => {
  const dish = useSelector(state => state.dishes.dishes)[0];
  const promotion = useSelector(state => state.promotions.promotions)[0];
  const leader = useSelector(state => state.leaders.leaders)[0]

  console.log(dish, promotion, leader);
  const dishShowHome = data[0];
  const promotionsShowHome = PROMOTIONS[0];
  const leadersShowHome = LEADERS[0];
  return (
    <Fragment>
      <Header/>
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path={"/menu"} exact>
            <MenuComponent />
          </Route>
          <Route path={"/menu/:dishID"}>
            <DishDetail />
          </Route>
          <Route path={"/contactus"}>
            <Contact />
          </Route>

          <Route path={"/home"}>
            <Home
            
              dish={dish}
              promotion={promotion}
              leader={leader}
            />
          </Route>
        </Switch>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Main;
