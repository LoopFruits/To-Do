import React, { useState, useEffect } from "react";
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

  useEffect(()=> {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json().then(user =>setUser(user));
      }
    })
  },[])

  if(!user) return <Login user={user} />
  
  return (
    <div>
      <Navbar setUser={setUser} />
      <Routes>
        <Route  path="/login" element={<LoginForm setUser={setUser} />} >
        </Route>
        <Route  path="/" element={<Home user={user} />}>
        <Route  path="/login" element={<Login handleLogin={handleLogin} />}> {/*Make a login page */}
        </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
