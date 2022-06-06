import TweetContext from "./TweetContext";
import LeftNavbar from "../components/LeftNavbar";
import CenterSection from "../components/Tweets Section/CenterSection";
import SearchSection from "../components/SearchSection";
import React, { useState } from "react";

const TweetState = () => {
  const [tweets, settweets] = useState([]);

  let tweetURL = "https://tweets2.free.beeceptor.com/tweets";

  //GET ALL TWEETS
  let getTweets = async () => {
    try {
      const data = await fetch(tweetURL);
      settweets(await data.json());
      //console.log(tweets);
    } catch (err) {
      console.log(err);
    }
  };

  //ADD TWEET
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

export default TweetState;
export { TweetContext };
