import { data } from "../Data/Data";
import MediaItem from "./MediaItem";
const MenuComponent = () => {
  const listData = data;
  console.log(listData);
  return (
    listData.map(data => <MediaItem key ={data.id} data={data}/>)
  );
};

export default MenuComponent;
