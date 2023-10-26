import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser; // Get the currently authenticated user

    if (user) {
      // Sign the user out
      auth
        .signOut()
        .then(() => {
          // User signed out successfully
          console.log("User signed out successfully.");
        })
        .catch((error) => {
          // An error occurred while signing the user out
          console.error("Error signing out:", error);
        });
    } else {
      // No user is currently signed in
      console.log("No user is currently signed in.");
    }

    // Use the navigate function to navigate to the login page
    navigate('/login');

  }, [navigate]);

  return (
    <div className="signout-container">
      <p className="signout-message">Signing you out...</p>
    </div>
  );
}

export default Signout;