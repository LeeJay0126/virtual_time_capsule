import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/context/LoginContext";
import Home from "./pages/Home/Home";
import { useState } from "react";
import SignUp from "./pages/Account/SignUp";
import SignIn from "./pages/Account/SignIn";
import CreateCapsule from "./pages/CreateCapsule/CreateCapsule";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createCapsule" element={<CreateCapsule />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
