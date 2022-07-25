import { data } from "../Data/Data";
import CartItem from "./CarItem";
import DishDetail from "./DishDetail";
import { Fragment, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  const listData = data;
  const [dataDetail, setDataDetail] = useState("");
  const getDataClick = (id) => {
    setDataDetail(listData.find((data) => data.id === id));
  };
  console.log(dataDetail);
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to={`/home`}>Home </Link>
        </BreadcrumbItem>

        <Breadcrumb.Item active>Menu</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row">
        {listData.map((data) => (
          <CartItem onClick={getDataClick} key={data.id} data={data} />
        ))}
      </div>
      {dataDetail ? <DishDetail data={dataDetail} /> : ""}
    </Fragment>
  );
};

export default MenuComponent;
