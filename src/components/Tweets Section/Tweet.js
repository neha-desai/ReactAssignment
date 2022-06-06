import React from "react";
import "../../App.css";
const Tweet = (props) => {
  return (
    <div>
      <div className="tweet">
        <p className="userName">
          {props.tweet.userName}
          <span className="dot"></span>
          <span className="date"> {props.tweet.date}</span>
        </p>

        {props.tweet.tweet}
      </div>
    </div>
  );
};

export default Tweet;
