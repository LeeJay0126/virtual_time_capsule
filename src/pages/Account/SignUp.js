import AccountNav from "./AccountNav";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Account.css";


const SignUp = () => {

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  //url is subjected to be changed after setting up the server
  const url = "http://localhost:3500/submitUser";
  const navigate = useNavigate();

  async function postNewUser(e) {
    e.preventDefault();
    //better validation required
    if (!(value.email == "" && value.email == "" && value.password == "")) {
      await axios.post(url, {
        name: value.name,
        email: value.email,
        password: value.password
      }).then(res => {
        console.log(res.data);
        if (res.data == "success") {
          setErrorMsg("Success!");
          // navigate("/");
        } else {
          setErrorMsg(res.data);
        }
      }).catch(err => {
        console.log(err);
      });
    } else {
      setErrorMsg("Please don't leave any of the fields blank");
    }
  };

  return (
    <div>
      <AccountNav />
      <main className="AccountMain">
        <h1 className="AccountHeading">Create Your Free Account</h1>
        <h2 className="SecondaryAccountHeading">
          Already Have an Account?
          <Link to="/signin" className="AccountLink">
            Log In
          </Link>
        </h2>
        <form className="AccountInputSection" onSubmit={postNewUser}>
          <input type="text" placeholder="Full Name" className="LoginFields" onChange={(e) => setValue({ ...value, name: e.target.value })} />
          <input type="text" placeholder="you@email.com" className="LoginFields" onChange={(e) => setValue({ ...value, email: e.target.value })} />
          <input type="text" placeholder="Password" className="LoginFields" onChange={(e) => setValue({ ...value, password: e.target.value })} />
          <button type="submit" className="LoginButton">CREATE FREE ACCOUNT </button>
          <p className="errorMessage">{errorMsg}</p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
