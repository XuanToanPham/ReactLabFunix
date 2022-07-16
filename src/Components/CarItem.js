const CartItem = (props) => {
  const dish = props.data;
  const getIdData = () =>{
    props.onClick(dish.id)
  }
  return (
    <div className="col-12 col-lg-6" onClick={getIdData}>
      <div className="card text-white mt-5">
        <img src={require(`../${dish.image}`)} className="card-img" alt="..." />
        <div className="card-img-overlay text-dark">
          <h3 className="card-title">{dish.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
