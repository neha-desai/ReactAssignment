import "../../App.css";
import React, { useContext } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "../HomeScreen";
import AddTweet from "./AddTweet";

let CenterSection = () => {
  const tcontext = useContext(TweetContext);

  let { tweets } = tcontext;

  return (
    <div className="centerSection">
      <AddTweet />
      {tweets.map((tweet) => {
        return (
          <div className="row">
            <Tweet key={tweet._id} tweet={tweet} />
          </div>
        );
      })}
    </div>
  );
};

export default CenterSection;
