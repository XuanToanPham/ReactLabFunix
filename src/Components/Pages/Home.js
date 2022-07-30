import { Fragment } from "react";
import { Card, Breadcrumb } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Data/baseUrl";
const RenderCard = (props) => {
  const item = props.item;
  const image = `../../${item.image}`;
  const promotion = useSelector((state) => state.promotions.promotions);
  console.log(promotion);
  return (
    <Fragment>
      <Card>
        <Card.Img src={`${baseUrl+item.image}`} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {item.designation ? (
            <Card.Subtitle>{item.designation}</Card.Subtitle>
          ) : null}
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

const Home = (props) => {
  const dish = props.dish;
  const promotion = props.promotion;
  const leader = props.leader;

  const check = dish && promotion && leader ? true : false;
  const content = check ? (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item active>
          <Link to="/home">Home</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
  return content;
};

export default Home;
