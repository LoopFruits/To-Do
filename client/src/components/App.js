import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Navbar from "./NavBar";
import Login from "./Login"

function App() {
  const [user, setUser] = useState(false);


  function handleLogin(user){
    setUser(user);
  }


  return (
    <div>
      <Navbar setUser={setUser} />
      <Routes>
        <Route exact path="/login" element={<LoginForm setUser={setUser} />} >
        </Route>
        <Route exact path="/" element={<Home user={user} />}>
        <Route exact path="/login" element={<Login handleLogin={handleLogin} />}> {/*Make a login page */}
        </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
