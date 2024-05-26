import { LOGO_URL, SEARCH_URL } from "../Utils/Constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
let search;
const Header = () => {
  const [buttonClick, setButtonClick] = useState(["Login"]);

  const [searchInput, setSearchInput] = useState([]);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex p-4 justify-between items-center">
      <div className="logo w-20">
        <img src={LOGO_URL} alt="Company-Logo" />
      </div>

      <div className="search">
        <input
          type="text"
          className=" focus:outline-none border-2 border-orange-500  w-[750px] h-[60px] p-6 text-xl rounded-[40px]"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="focus:outline-none border-0  h-[60px] p-3.5 px-5 ml-[-99.5px] text-xl rounded-[40px] text-center hover:bg-orange-500 hover:text-white"
          onClick={() => {}}
        >
          Search
        </button>
      </div>

      <div className="nav-items">
        <ul className="flex justify-between text-xl">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to="./About">About</Link>
          </li>
          <li className="mr-10">
            <Link to="./Offers">Offers</Link>
          </li>
          <li className="mr-10">
            <Link to="./cart">Cart - Items({cartItems.length})</Link>
          </li>
          <button
            className="mr-4"
            onClick={() => {
              buttonClick === "Login"
                ? setButtonClick("Logout")
                : setButtonClick("Login");
            }}
          >
            {buttonClick}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
// export const[searchInput, setSearchInput]=useState([]);
