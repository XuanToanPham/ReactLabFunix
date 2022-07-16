
import { COMMENTS } from "../Data/Comment";
import Comment from "./Comment";
const DishDetail = (props) => {
  const dish = props.data;
  const idComment = dish.id;
  console.log(idComment)
  const listComment = COMMENTS.filter(
    (comment) => comment.dishId === idComment
  );

  console.log(listComment   )
  
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
