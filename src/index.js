import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Books from "./components/Books/Books";
import BookInfo from "./components/BookInfo/BookInfo";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />}>
          <Route path="book" element={<Books />} />
          <Route path="/book/:id" element={<BookInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
