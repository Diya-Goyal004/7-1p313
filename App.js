import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import
import Header from './Header';
import Login from './Login'; // Corrected import
import Signup from './SignUp'; // Corrected import
import Signout from './SignOut'; // Corrected import
import Main from './Main';

import './App.css'; // Import CSS file

function App() {
  const articles = [
    {
      title: 'Exploring Hidden Gems: Off-the-Beaten-Path Destinations',
      image: 'https://www.mywestford.com/wp-content/uploads/2022/05/tour.jpg',
      description: 'Escape the crowds and discover lesser-known travel destinations that offer unique experiences and breathtaking natural beauty. From secluded islands to charming countryside villages, this article unveils the beauty of off-the-beaten-path travel.',
      rating: '⭐⭐⭐⭐', // Star rating as a star symbol followed by a number
      author: 'John Doe',
    },
    {
      title: 'Culinary Adventures Around the World',
      image: 'https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/09/Career-in-Travel-and-Tourism.jpg',
      description: 'Embark on a culinary journey across continents and savor the flavors of diverse cuisines. This article takes you on a tour of must-try dishes and food festivals from different countries, making your taste buds travel.',
      rating: '⭐⭐⭐⭐⭐',
      author: 'Jane Smith',
    },
    {
      title: 'The Art of Sustainable Travel: Eco-Friendly Tourism Tips',
      image: 'https://images.mini-ielts.com/images/1/18/tourism.jpg',
      description: 'Learn how to travel responsibly and minimize your environmental impact while exploring the world. This article provides eco-friendly travel tips, from choosing eco-conscious accommodations to supporting local conservation efforts.',
      rating: '⭐⭐⭐⭐⭐',
      author: 'Alice Johnson',
    },
  ];

  const tutorials = [
    {
      title: 'Planning Your Dream Vacation: A Step-by-Step Guide',
      image: 'https://www.horizonfcu.org/site_content/site_assets/images/vacation.jpg',
      description: 'This comprehensive tutorial walks you through the process of planning the perfect vacation. From choosing your destination and budgeting to booking flights and accommodations, you will learn the essential steps to turn your travel dreams into reality.',
      rating: '⭐⭐⭐⭐⭐',
      author: 'David Smith',
    },
    {
      title: 'Capturing Travel Memories: Photography Tips for Tourists',
      image: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1613133428233-NEPK9JBTH4M4QSQ0VN9F/The+Common+Wanderer-5244.jpg',
      description: 'Become a skilled travel photographer with this tutorial. Discover techniques for capturing stunning landscapes, vibrant street scenes, and candid moments during your travels. Learn about composition, lighting, and post-processing to take your travel photos to the next level.',
      rating: '⭐⭐⭐⭐',
      author: 'Emily Johnson',
    },
    {
      title: 'Navigating a New City: A Tourist Guide to Local Transportation',
      image: 'https://previews.123rf.com/images/vbaleha/vbaleha1311/vbaleha131100103/23525904-bus-for-tourists-transportation-and-group-of-tourists-neat-hotel.jpg',
      description: 'Getting around in a foreign city can be daunting. This tutorial equips you with practical advice on using public transportation, finding taxi services, and utilizing ride-sharing apps to explore a new city like a local.',
      rating: '⭐⭐⭐⭐',
      author: 'Michael Doe',
    },
  ];
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignOut" element={<Signout />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
