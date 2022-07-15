const MediaItem = (props) => {
  const dish = props.data;
  console.log(dish);
  return (
    <div className="media d-flex mt-5 align-items-center justify-content-start">
      <img
        className="align-center me-3"
        src={require(`../${dish.image}`)}
        alt="Generic placeholder"
      />
      <div className="media-body">
        <h5 className="mt-0">{dish.name}</h5>
        <p>{dish.description}</p>
      </div>
    </div>
  );
};

export default MediaItem;
