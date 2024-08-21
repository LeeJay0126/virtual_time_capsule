import AccountNav from "./AccountNav";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Account.css";
import { LoginContext } from "../../components/context/LoginContext";

const SignIn = () => {

    const { setLoggedIn } = useContext(LoginContext);
    const [value, setValue] = useState({
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState("");

    const url = "http://localhost:3500/login";
    const navigate = useNavigate();

    // This is where session / login cookie should come in to persist login status
    function loginHandler() {
        setLoggedIn(true);
    };

    async function fetchLoginData() {
        const username = value.username;
        const pw = value.password;
        setErrorMsg("");

        await axios.post(url, {
            username: username
        }.then(res => {
            if (res.data.message == "Incorrect Username!") {
                setErrorMsg(res.data.message);
            } else {
                if (res.data.message == pw) {
                    loginHandler();
                    navigate("/");
                    setErrorMsg(res.data.message);
                } else {
                    setErrorMsg("Wrong Password!");
                }
            }
        }).catch(err => { setErrorMsg(err.response.data) }));
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setErrorMsg("");
        if(value.username != "" && value.password != ""){
            fetchLoginData();
        } else {
            setErrorMsg("Do Not Leave The Username and Password Empty!");
        }
    };

    return (
        <div>
            <AccountNav />
            <form className="AccountMain" onSubmit={formSubmitHandler}>
                <h1 className="AccountHeading">Log in to LaterGator</h1>
                <h2 className="SecondaryAccountHeading">
                    Don't have an account?
                    <Link to="/signup" className="AccountLink">
                        Sign Up
                    </Link>
                </h2>
                <form className="AccountInputSection">
                    <input type="text" placeholder="you@email.com" className="LoginFields" onChange={(e) => setValue({ ...value, email: e.target.value })} />
                    <input type="text" placeholder="Password" className="LoginFields" onChange={(e) => setValue({ ...value, password: e.target.value })} />
                    <button type="submit" className="LoginButton">LOGIN </button>
                    <p className="errorMessage">{errorMsg}</p>
                </form>
            </form>
        </div>
    );
};

export default SignIn;