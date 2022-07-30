import { Link } from "react-router-dom";
import { baseUrl } from "../Data/baseUrl";
const CartItem = (props) => {
  const dish = props.data;
  const getIdData = () =>{
    props.onClick(dish.id)
  }
  return (
    <Link to={`/menu/${dish.id}`} className="col-12 col-lg-6" onClick={getIdData}>
      <div className="card text-white mt-5">
        <img src={`${baseUrl+dish.image}`} className="card-img" alt="..." />
        <div className="card-img-overlay text-dark">
          <h3 className="card-title">{dish.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
