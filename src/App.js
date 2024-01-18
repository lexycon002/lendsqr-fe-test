import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./components/loginPage/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import UserPage from "./components/userPage/UserPage";
import UserDetails from "./components/userDetailsPage/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
