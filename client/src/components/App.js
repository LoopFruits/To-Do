import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Navbar from "./NavBar";
import Login from "./Login"

function App() {
  const [user, setUser] = useState(null);
  const [todo, setTodo] =useState([])
  

  const navigate =useNavigate();




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        
      };
    });
  }, []);


  // if(!user) return <Login user={user} />
  
  return (
    <div>
      
      <Routes>
        <Route  path="/"> 
        <Route  path="login" element={<Login onLogin={setUser}/>}/> 
          <Route  index element={<Home user={user} setUser={setUser} />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
