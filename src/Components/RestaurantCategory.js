import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const dispatch = useDispatch();
  const collapseItem = useSelector((store) => store.restaurantList?.collapse);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="md:w-7/12 w-10/12 bg-gray-100 p-5 mx-auto my-4 mt-5 shadow-sm ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold cursor-pointer">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⮟</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
