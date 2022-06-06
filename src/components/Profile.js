import React, { useState, useEffect } from "react";
import LeftNavbar from "./LeftNavbar";
import { ProfileContext } from "./Login";

const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getDetails();
  }, []);

  let getDetails = async () => {
    let profileURL = "https://tweets2.free.beeceptor.com/profile";

    //GET PROFILE DETAILS

    try {
      const data = await fetch(profileURL);
      setProfile(await data.json());
      //console.log(profile);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="HomeScreen">
      <LeftNavbar />
      <div className="profileDetails">
        <b>Name:</b> {profile.first_name}&nbsp;
        {profile.last_name}
        <br />
        <b>Email:</b> {profile.email}
        <br />
        <b>Gender:</b> {profile.gender}
        <br />
        <b>Country:</b> {profile.country}
      </div>
    </div>
  );
};

export default Profile;
