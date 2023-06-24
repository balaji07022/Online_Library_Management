import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Retrieve registered users from local storage on component mount
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    }
    const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  React.useEffect(() => {
    // Store registered users in local storage whenever it changes
    window.localStorage.setItem(
      "registeredUsers",
      JSON.stringify(registeredUsers)
    );
  }, [registeredUsers]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: value,
    }));
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm((prevRegistrationForm) => ({
      ...prevRegistrationForm,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Logging in...", loginForm);

    // Check if user exists in registeredUsers
    const userExists = registeredUsers.some(
      (user) =>
        user.email === loginForm.email && user.password === loginForm.password
    );

    if (userExists) {
      setIsLoggedIn(true);
      sessionStorage.setItem("isLoggedIn", "true");
      window.localStorage.setItem(
        "registeredUsers",
        JSON.stringify(registeredUsers)
      );
      if (isLoggedIn) navigate("/");
      localStorage.setItem("auth", true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Registering...", registrationForm);

    // Check if user with the same email already exists
    const userExists = registeredUsers.some(
      (user) => user.email === registrationForm.email
    );

    if (userExists) {
      alert("User with the same email already exists");
    } else {
      setRegisteredUsers((prevRegisteredUsers) => [
        ...prevRegisteredUsers,
        registrationForm,
      ]);
      setIsLoggedIn(true);
      window.localStorage.setItem("isLoggedIn", "true");
      window.localStorage.setItem(
        "registeredUsers",
        JSON.stringify(registeredUsers)
      );
    }
  };

  return (
    <div className="auth-container flex flex-c text-center text-white">
      <p className="welcome">WELCOME TO</p>
      <p className="library-title">
        T H E &nbsp; S A C R E D &nbsp; K N O W L E D G E
      </p>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <BiSolidUser />
          <input
            className="box"
            type="email"
            value={loginForm.email}
            onChange={handleLoginChange}
            placeholder="your email"
            id="email"
            name="email"
          />
          <br />
          <BiSolidLockAlt />
          <input
            className="box"
            onChange={handleLoginChange}
            type="password"
            value={loginForm.password}
            placeholder="your password"
            id="password"
            name="password"
          />
          <button type="submit" id="submit">
            Log in
          </button>
        </form>
        <p className="auth-title-reg">New User Registration</p>
        <form className="login-form" onSubmit={handleRegistrationSubmit}>
          <input
            className="box"
            type="text"
            value={registrationForm.name}
            onChange={handleRegistrationChange}
            placeholder="Full Name"
            name="name"
          />
          <br />
          <BiSolidUser className="solid-user" />
          <input
            className="box"
            type="email"
            value={registrationForm.email}
            onChange={handleRegistrationChange}
            placeholder="your email"
            name="email"
          />
          <br />
          <BiSolidLockAlt />
          <input
            className="box"
            value={registrationForm.password}
            onChange={handleRegistrationChange}
            type="password"
            placeholder="your password"
            name="password"
          />
          <button type="submit" id="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
