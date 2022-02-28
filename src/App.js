import "./App.css";
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AuthProvider>
          <Routes>
            <Route path="/" />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
