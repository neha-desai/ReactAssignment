import "../App.css";
import React, { createContext, useState, useEffect } from "react";
import LeftNavbar from "./LeftNavbar";
import CenterSection from "./Tweets Section/CenterSection";
import SearchSection from "./SearchSection";

//creating Tweet Context
const TweetContext = createContext();

let HomeScreen = (props) => {
  const [tweets, settweets] = useState([]);

  let tweetURL = "https://tweets2.free.beeceptor.com/tweets";

  //GET ALL TWEETS FUNCTION
  let getTweets = async () => {
    try {
      const data = await fetch(tweetURL);
      settweets(await data.json());
    } catch (err) {
      console.log(err);
    }
  };

  //ADD TWEET FUNCTION
  let addTweet = async (tweetDeatils, tweetDate) => {
    console.log(tweetDeatils, tweetDate);
    const note = {
      tweet: tweetDeatils,
      date: tweetDate,
      userName: localStorage.getItem("user"),
    };
    //console.log(note);
    settweets(tweets.concat(note));
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="HomeScreen">
      <TweetContext.Provider value={{ tweets, getTweets, addTweet }}>
        <LeftNavbar />
        <CenterSection />
        <SearchSection />
      </TweetContext.Provider>
    </div>
  );
};

export default HomeScreen;
export { TweetContext };
