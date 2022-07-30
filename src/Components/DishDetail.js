import Comment from "./Comment";
import {useParams, Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../Data/baseUrl";
import { dishesActions } from "../Redux/dishesAction";
import axios from "axios";
import { useEffect } from "react";
import FormComment from "./UI/FormComment";
import {formComment, formCommentActions} from "../Redux/formComment"
const DishDetail = () => {
  const params = useParams();
  const dishpatch = useDispatch();
  const comments = useSelector((state) => state.comment.comment);
  const dishDetail = useSelector((state) => state.dishes.dishDetail);
  let commentDetail;
  if (comments.length > 0) {
    commentDetail = comments.filter(
      (comment) => comment.dishId === +params.dishID
    );
  }
  console.log(commentDetail);
  const fetchDishDetail = async () => {
    const response = await axios
      .get(`${baseUrl}dishes/${+params.dishID}`)
      .catch((err) => console.log(err));
    console.log(response.data);
    dishpatch(dishesActions.DishDetail(response.data));
  };

  useEffect(() => {
    fetchDishDetail();
    console.log(dishDetail);
  }, []);
  const showFormComment = () =>{
    dishpatch(formCommentActions.showFormComment(+params.dishID));
  }
  const dishes = useSelector((state) => state.dishes.dishes);
  const dish = dishes.find((dish) => dish.id === +params.dishID);
  const idComment = +params.dishID;
  const listComment = comments.filter(
    (comment) => comment.dishId === idComment
  );
  const content =
    dishDetail && comments.length >0 ? (
      <div className="row mt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/home">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/menu">Menu</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{dish.name}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="col-6">
          <div className="card">
            <img
              src={`${baseUrl + dish.image}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text">{dish.description}</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h3>Comments</h3>
          {listComment.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <button className="btn btn-outline-secondary" onClick={showFormComment}>Submit Comment</button>
        </div>
        
      </div>
    ) : (
      <div>Loading</div>
    );
  return content;
};

export default DishDetail;
