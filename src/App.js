import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import FormLogin from "./Components/UI/FormLogin";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./Data/baseUrl";
import { useDispatch, useSelector } from "react-redux";
import { dishesActions } from "./Redux/dishesAction";
import { commentActions } from "./Redux/commentsAction";
import {promotionsActions} from "./Redux/promotionsAction"
import {leadersActions} from "./Redux/leadersAction"
import FormComment from "./Components/UI/FormComment";
function App() {
  const [onShow, setOnShow] = useState(false);
  const dispatch = useDispatch();
  const showFormComment = useSelector(state => state.formComment.onShow);
  const showFormLogin = useSelector(state => state.formLogin.onShow);

  console.log(showFormComment);
  const showModal = () => {
    setOnShow(true);
  };
  const hideModal = () => {
    setOnShow(false);
  };
  const [onShowComment, setOnShowComment] = useState(false);
  
  const fetchDishes = async () => {
    const response = await axios
      .get(`${baseUrl}dishes`)
      .catch((error) => console.log(error));
    console.log(response.data);
    dispatch(dishesActions.setDishes(response.data));
  };

  const fetchComment = async () => {
    const response = await axios
      .get(`${baseUrl}comments`)
      .catch((error) => console.log(error));
    dispatch(commentActions.setComment(response.data));
  };

  const fetchPromotion = async () => {
    const respone = await axios
      .get(`${baseUrl}promotions`)
      .catch((err) => console.log(err));
    dispatch(promotionsActions.setpromotions(respone.data));
  };

  const fetchLeaders= async () => {
    const respone = await axios
      .get(`${baseUrl}leaders`)
      .catch((err) => console.log(err));
    dispatch(leadersActions.setleaders(respone.data));
  };

  useEffect(() => {
    fetchDishes();
    fetchComment();
    fetchPromotion();
    fetchLeaders();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {showFormLogin && <FormLogin/>}
        {showFormComment && <FormComment/>}
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
