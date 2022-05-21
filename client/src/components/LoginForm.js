import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ handleLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   handleLogin(true);

  //   // after logging the user in, redirect to the home page!
  //   navigate("/"); // might have to use navigate.replace 
  // }

  function handleSubmit (e) {
    e.preventDefault();
    fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            handleLogin(user);
          console.log("logged in");
          navigate('/')
        })
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit"> {isLoading ? "Loading..." : "Login"} 
      Login
      </button>
      <>
      {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </>
    </form>
  );
}

export default LoginForm;
