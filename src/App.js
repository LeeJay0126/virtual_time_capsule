import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./components/context/LoginContext";
import Home from "../src/pages/Home";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
