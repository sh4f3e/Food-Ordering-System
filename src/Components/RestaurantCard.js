import Body from "./Body";
import { CDN_URL } from "../Utils/Constants";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, costForTwo, avgRating, sla, cuisines } =
    resData?.info;
  return (
    <div className="restaurant-card md:w-[275px] w-[200px] md:h-[460px] h-[370px] md:ml-[50px] -ml-[10px] md:mt-[50px] mt-[40px] bg-[#ecf0f1] rounded-[15px] hover:border-[1.5px] hover:border-white cursor-pointer shadow-[0_-3px_10px_3px_rgba(0, 0, 0, 0.2)] md:mr-0 mr-7">
      <img
        className="md:h-[220px] h-[150px] w-[100%] md:w-[100%] rounded-t-[15px] border-b-4 border-orange-500"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="flex justify-center text-lg md:text-[22px] pl-[5px] mb-[2px] font-semibold  mt-[10px]">
        {name}
      </h3>
      <h4 className="mt-1 text-md md:text-[16px] text-[#fc8019] italic flex justify-center leading-[20px] m-[10px]">
        🏷️({costForTwo})
      </h4>
      <div className="flex justify-evenly items-center ">
        <h4 className="mt-1 text-[15px]">{avgRating}⭐ Rating</h4>
        <h4 className="mt-[6px] text-[15px]">• {sla.deliveryTime} mins</h4>
      </div>
      <h5 className="text-[#7f7f7f] text-[16px] pt-[20px] pl-[20px] pr-[10px] flex justify-center leading-[20px]">
        {cuisines.join(", ")}
      </h5>
    </div>
  );
};

export default RestuarantCard;
