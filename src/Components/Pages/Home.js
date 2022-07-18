import { Fragment } from "react";
import { Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const RenderCard = (props) => {
  const item = props.item;
  const image = `../../${item.image}`;
  console.log(image);
  return (
    <Fragment>
      <Card>
        <Card.Img src={require(`../../${item.image}`)} alt={item.name} />
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
  console.log(props);
  return (
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.Item active>
          <Link to="/home">Home</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
};

export default Home;
