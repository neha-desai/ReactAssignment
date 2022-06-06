import React, { useState, useContext } from "react";
import { TweetContext } from "../HomeScreen";
import { FaImage, FaRegSmile } from "react-icons/fa";
import { AiOutlineFileGif } from "react-icons/ai";

const AddTweet = () => {
  const context = useContext(TweetContext);
  let { addTweet } = context;

  //ADD TWEET STATE
  const [tweet, settweet] = useState([{ tweetDetails: "", tweetDate: "" }]);

  //HANDLE ADD BUTTON FUNCTIONALITY
  let handleClick = (e) => {
    e.preventDefault();
    addTweet(tweet.tweetDetails, "23/05/2022");
    tweet.tweetDetails = "";
  };

  //HANDLE CHANGE FUNCTION
  let handleChange = (e) => {
    settweet({ ...tweet, [e.target.name]: e.target.value });
  };

  return (
    <div className="addTweet">
      <div className="addTitle">
        <h6>Home</h6>
      </div>
      <form className="formDiv">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="tweetDetails"
            name="tweetDetails"
            aria-describedby="emailHelp"
            placeholder="What's happening?"
            value={tweet.tweetDetails}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="iconDiv">
          <FaImage />
          <FaRegSmile />
          <AiOutlineFileGif />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="TweetBtn"
          onClick={handleClick}
        >
          Tweet
        </button>
      </form>
    </div>
  );
};

export default AddTweet;
