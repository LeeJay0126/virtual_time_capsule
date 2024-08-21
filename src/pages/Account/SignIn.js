import AccountNav from "./AccountNav";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Account.css";

const SignIn = () => {

    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const url = "http://localhost:3500/submitUser";
    const navigate = useNavigate();

    return (
        <div>
            <AccountNav />
            <main className="AccountMain">
                <h1 className="AccountHeading">Create Your Free Account</h1>
                <h2 className="SecondaryAccountHeading">
                    Already Have an Account?
                    <Link to="/signup" className="AccountLink">
                         Sign Up
                    </Link>
                </h2>
                <form className="AccountInputSection">
                    <input type="text" placeholder="you@email.com" className="LoginFields" onChange={(e) => setValue({ ...value, email: e.target.value })} />
                    <input type="text" placeholder="Password" className="LoginFields" onChange={(e) => setValue({ ...value, password: e.target.value })} />
                    <button type="submit" className="LoginButton">LOGIN </button>
                </form>
            </main>
        </div>
    );
};

export default SignIn;