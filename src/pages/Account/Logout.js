import AccountNav from "./AccountNav";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import axios from "axios";
import "./Account.css";
import { LoginContext } from "../../components/context/LoginContext";


const Logout = () => {
    
const urlLogout = "http://localhost:3500/logout";
const navigate = useNavigate();

async function logout () {
    await axios.post(url)
    .then(res => {
        navigate("/");
    });
};

}