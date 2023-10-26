import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth();
  const db = getFirestore();

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // User successfully signed up, you can access userCredential.user to get the user information
      const user = userCredential.user;

      // Store user data in Firestore
      const userData = {
        name,
        email,
        // Do not store the password, as it's not recommended for security reasons
      };

      const userDocRef = doc(db, 'users', user.uid);

      await setDoc(userDocRef, userData);

      // After successful signup, navigate to the login page
      navigate('/Login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <p>Create a DEV@Deakin Account</p>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Create</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Signup;
