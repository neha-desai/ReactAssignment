import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileContext = createContext();
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: " ", password: " " });
  const [errorText, seterrorText] = useState("");
  const [profile, setProfile] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    getDetails();
  }, []);

  //FETCH PROFILE DETAILS FROM API
  let getDetails = async () => {
    let profileURL = "https://tweets2.free.beeceptor.com/profile";

    try {
      const data = await fetch(profileURL);
      setProfile(await data.json());
      //console.log(profile);
    } catch (err) {
      console.log(err);
    }
  };

  //HANDLE THE LOGIN SUBMT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let compareStr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/;
    if (credentials.password.match(compareStr)) {
      if (credentials.email === profile.email) {
        localStorage.setItem("user", profile.email);
        navigate("/home");
      } else {
        window.alert("Wrong credentials");
      }
    } else {
      seterrorText(
        "Password Must contain atleast uppercase letter, numbers and a special character."
      );
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div id="emailHelp" className="form-text text-danger">
          {errorText}
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ProfileContext.Provider value={"hellos"}>
        {/* What is to be put here*/}
      </ProfileContext.Provider>
    </div>
  );
};

export default Login;
export { ProfileContext };
