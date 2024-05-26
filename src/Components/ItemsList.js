import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/Constants";
import { addItem } from "../utils/cartSlice";
const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-3 pb-4 border-b-2 border-gray-200 flex justify-center"
          >
            <div className="w-9/12">
              <div className="font-semibold mb-2 ">
                <span>{item.card.info.name} </span>
                <span>
                  Rs.
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button
                  className="my-[-15px] mx-[-12px] px-[9px] py-[9px] rounded-lg bg-black text-white"
                  onClick={() => {
                    handleCart(item);
                  }}
                >
                  - Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemsList;
