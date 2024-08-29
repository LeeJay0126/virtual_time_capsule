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

    const url = "http://localhost:3500/signIn";
    const navigate = useNavigate();

    // This is where session / login cookie should come in to persist login status
    function loginHandler() {
        setLoggedIn(true);
    };

    async function fetchLoginData() {
        const pw = value.password;
        setErrorMsg("");

        await axios.post(url, {
            email: value.email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data.success);
            if (!res.data.success) {
                setErrorMsg('Wrong ID/Password');
            } else {
                if (res.data.success) {
                    loginHandler();
                    navigate("/");
                    setErrorMsg(res.data);
                }
            }
        }).catch(err => {
            setErrorMsg("Wrong");
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setErrorMsg("");
        if (value.username != "" && value.password != "") {
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
                <section className="AccountInputSection">
                    <input type="text" placeholder="you@email.com" className="LoginFields" onChange={(e) => setValue({ ...value, email: e.target.value })} />
                    <input type="text" placeholder="Password" className="LoginFields" onChange={(e) => setValue({ ...value, password: e.target.value })} />
                    <button type="submit" className="LoginButton">LOGIN </button>
                    <p className="errorMessage">{errorMsg}</p>
                </section>
            </form>
        </div>
    );
};

export default SignIn;