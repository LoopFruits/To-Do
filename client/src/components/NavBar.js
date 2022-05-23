import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar({ user, setUser }) {

  const navigate = useNavigate();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
          setUser(null);
          navigate("/login")
      }
      });
  }



  return (
    <div>
        <button  to="/home" exact>Todos</button>
        <br></br>
        <br></br>
        <button variant="outline" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
