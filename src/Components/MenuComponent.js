import { data } from "../Data/Data";
import CartItem from "./CarItem";
import DishDetail from "./DishDetail";
import { Fragment, useState } from "react";
const MenuComponent = () => {
  const listData = data;
  const [dataDetail, setDataDetail] = useState("");
  const getDataClick = (id) => {
    setDataDetail(listData.find((data) => data.id === id));
  };
  console.log(dataDetail);
  return (
    <Fragment>
      <div className="row">
        {listData.map((data) => (
          <CartItem onClick={getDataClick} key={data.id} data={data} />
        ))}
      </div>
      {dataDetail ? <DishDetail data={dataDetail}/>: ""}
    </Fragment>
  );
};

export default MenuComponent;
