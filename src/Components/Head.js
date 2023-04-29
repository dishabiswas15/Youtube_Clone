import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCHSUGGESTIONS_API } from "../Utils/constants";
import { cacheResults } from "../Utils/searchSlice";
import Slidebar from "./Slidebar";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  /**
   * searchCache = {
   * "iphone": ["iphone11", "iphone14"]}
   *
   * searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    //API call
    // console.log(searchQuery);

    //make an API call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /**
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make an api call after 200 ms
   *
   * key -ip
   * - re-render the component
   * useEffect()
   * - start a new timer => make api call after 200 ms
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCHSUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="">
    <div className="grid grid-flow-col p-2 m-2 shadow-md">
      <div className="flex cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          alt="HamburgerMenu"
          className="h-10 pt-3"
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
        />
        <a href="/">
          <img
            alt="logo"
            className="h-16 pb-2"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </a>
      </div>
      <div className="p-2">
        <div>
          <input
            className="px-5 border  border-gray-400 rounded-l-full w-2/3 "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className="w-16 border border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2n px-2 w-[26rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          alt="UserIcon"
          className="h-10 pt-2"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
    <Slidebar/>
    </div>
  );
}

export default Head;
