
import { COMMENTS } from "../Data/Comment";
import { data } from "../Data/Data";
import Comment from "./Comment";
import {useLocation, useParams} from "react-router-dom"
const DishDetail = () => {
  const params = useParams();
  const location = useLocation()
  const dish = data.find(dish => dish.id === +params.dishID);
  const idComment = +params.dishID;
  const listComment = COMMENTS.filter(
    (comment) => comment.dishId === idComment
  );
  console.log(listComment)
  
  return (
    <div className="row mt-5">
      <div className="col-6">
        <div className="card">
          <img
            src={require(`../${dish.image}`)}
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
        {listComment.map(comment => <Comment key = {comment.id} comment={comment}/>)}
      </div>
    </div>
  );
};

export default DishDetail;
