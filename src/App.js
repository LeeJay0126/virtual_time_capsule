import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/context/LoginContext";
import Home from "./pages/Home/Home";
import { useState } from "react";
import SignUp from "./pages/Account/SignUp";
import SignIn from "./pages/Account/SignIn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
