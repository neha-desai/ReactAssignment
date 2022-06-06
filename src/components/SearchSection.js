import "../App.css";
import React, { useState, useContext, useRef } from "react";
import { TweetContext } from "./HomeScreen";

function SearchSection() {
  //useContext
  const context = useContext(TweetContext);
  let { tweets } = context;
  const inputEl = useRef("");

  //State for searchText and searchedTweet Array
  const [searchText, setsearchText] = useState();
  const [searchedTweet, setsearchedTweet] = useState([]);

  //Receiving data from text box
  let handleChange = (e) => {
    setsearchText(inputEl.current.value);
    if (searchText !== "") {
      const newTweetList = tweets.filter((tweet) => {
        return Object.values(tweet).join("").toLowerCase().includes(searchText);
      });
      setsearchedTweet(newTweetList);
    }
  };

  return (
    <div className="SearchSection">
      <input
        ref={inputEl}
        type="text"
        placeholder="Search Twitter"
        name="searchText"
        onChange={handleChange}
      />
      <div className="searchDiv">
        {searchedTweet.map((temp) => {
          return (
            <div className="searchedTweet">
              <h6>@{temp.userName}</h6>
              {temp.tweet}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchSection;
