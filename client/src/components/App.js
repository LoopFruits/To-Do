import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./NavBar";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} >
        </Route>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
