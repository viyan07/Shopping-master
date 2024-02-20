import React, { useContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase';

import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import "./Header.css";
const Header = () => {

const [isActive, setIsActive] = useState(false);
const [user, setUser] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  window.addEventListener('scroll', () => {
    setIsActive(window.scrollY > 60);
  });

  // Check if user is logged in
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  // Clean up subscription
  return () => unsubscribe();
}, []);

const handleLogout = () => {
  signOut(auth).then(() => {
    navigate("/");
    console.log("Signed out successfully");
  }).catch((error) => {
    console.error("Sign out error:", error);
  });
}

return (
  <header className={`${isActive ? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all item-center`}>
    <div className=' container mx-auto  flex item-center  justify-between h-full'>
      <h1>N9 Clothing</h1>
      <div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <div>
        
      </div>
    </div>
  </header>
);

};

export default Header;
