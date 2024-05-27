import { LOGO_URL, SEARCH_URL } from "../Utils/Constants";
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addRestaurantList,
  searchRestaurantList,
} from "../utils/restaurantListSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchText = useRef();
  const restaurantList = useSelector((store) => store.restaurantList?.list);

  const handleSearchText = () => {
    dispatch(searchRestaurantList(searchText.current.value));
    const filteredList = restaurantList.filter((list) =>
      list?.info?.name
        .toLowerCase()
        .includes(searchText.current.value.toLowerCase())
    );
    dispatch(addRestaurantList(filteredList));
  };

  const [buttonClick, setButtonClick] = useState(["Login"]);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="md:flex md:p-4 md:justify-between md:items-center">
      <div className="md:w-20 ">
        <img className="w-14 m-2 " src={LOGO_URL} alt="Company-Logo" />
      </div>

      <div className="">
        <form
          className="md:mb-0 md:-mt-0 mb-4 -mt-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="pl-6 ml-12 md:ml-0 w-96 focus:outline-none border-2 border-orange-500  md:w-[750px] h-[50px] md:h-[60px] md:p-6 text-xl rounded-[40px]
"
          ></input>
          <button
            className="
focus:outline-none border-0 h-[50px] md:h-[60px] p-2 px-4 ml-[-84px] md:p-3.5 md:px-5 md:ml-[-99.5px] md:text-xl text-lg rounded-[40px] text-center hover:bg-orange-500 hover:text-white py-3"
            onClick={handleSearchText}
          >
            Search
          </button>
        </form>
      </div>

      <div className="nav-items">
        <ul className="flex justify-between md:text-xl text-lg px-8 py-2 md:p-0">
          <li className="md:mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="md:mr-10">
            <Link to="./About">About</Link>
          </li>
          <li className="md:mr-10">
            <Link to="./Offers">Offers</Link>
          </li>
          <li className="md:mr-10">
            <Link to="./cart">Cart - Items({cartItems.length})</Link>
          </li>
          <button
            className="md:mr-4"
            onClick={() => {
              buttonClick === "Login"
                ? setButtonClick("Logout")
                : setButtonClick("Login");
            }}
          >
            {buttonClick}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
// export const[searchInput, setSearchInput]=useState([]);
