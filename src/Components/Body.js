import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantList } from "../utils/restaurantListSlice";
const Body = () => {
  const searchText = useSelector((store) => store.restaurantList?.searchText);
  const restaurantlist = useSelector((store) => store.restaurantList?.list);
  const dispatch = useDispatch();

  //useEffect First Argument: Call Back Function (Arrow Function)
  //Second Argument: Dependencies (Array)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    dispatch(
      addRestaurantList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
  };
  const { setUserInfo, loggedInUser } = useContext(UserContext);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return (
      <div>
        <h1>Oops! It's seems too. Your connection is Lost</h1>

        <div className="online-status">
          <p>Status: {onlinestatus ? "Online" : "Offline"}</p>
        </div>
      </div>
    );
  }

  return !restaurantlist ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-7 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>

        <p className="italic ml-1 mt-[5px] text-gray-600">Filter</p>
      </div>
      <div className="Rated">
        <button
          className="rated-btn py-2 px-5 bg-orange-500 border-2 rounded-full m-2 ml-8 mt-5 text-white md:text-[20px] hover:bg-white hover:text-black hover:border-orange-500"
          onClick={() => {
            const filteredList = restaurantlist.filter(
              (res) => res.info.avgRating > "4.2"
            );
            dispatch(addRestaurantList(filteredList));
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="online-status flex flex-row-reverse text-[15px] italic text-[#7f7f7f] pr-[50px] md:mt-[-40px] -mt-10">
        <p>Status: {onlinestatus ? "Online" : "Offline"}</p>
      </div>

      <div className="res-container flex flex-wrap md:pl-[90px] pl-10">
        {restaurantlist.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestuarantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
