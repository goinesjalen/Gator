// components/Congratulations.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Congratulations = () => {
  // These will be replaced with actual congratulations from your team members
  const congratsMessages = [
    {
      name: "Sarah",
      message: "Jack and Jill, your love story has always inspired me. Watching you both grow together has been a beautiful journey. Wishing you endless happiness and adventures in this new chapter!",
      photo: "/img/friend-1.jpg"
    },
    {
      name: "Michael",
      message: "From college roommates to best man, I've seen your relationship blossom from day one. You two are perfect for each other, and I couldn't be happier to celebrate this day with you both!",
      photo: "/img/friend-2.jpg"
    },
    {
      name: "Emma",
      message: "To my dearest friends, thank you for showing us all what true love looks like. Your connection is something special, and I'm honored to be part of your celebration. Cheers to a lifetime of joy!",
      photo: "/img/friend-3.jpg"
    },
    // You can add more placeholder messages that you'll replace later
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Congratulations to Jack & Jill</h1>
        <p>Special messages from friends and family</p>
      </div>
      
      <div className="page-content">
        <div className="content-section intro">
          <p>This is our special way of sharing our love and well wishes for Jack and Jill. Each message represents years of friendship, shared memories, and the joy we feel seeing them begin this new chapter together.</p>
        </div>
        
        <div className="congratulations-grid">
          {congratsMessages.map((item, index) => (
            <div className="congrats-card" key={index}>
              <div className="congrats-photo" style={{ backgroundImage: `url(${item.photo})` }}></div>
              <div className="congrats-content">
                <h3>{item.name}</h3>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="content-section outro">
          <p>Jack and Jill, your love has touched all of our lives in unique ways. We celebrate you today and always!</p>
        </div>
      </div>
      
      <div className="page-navigation">
        <Link to="/" className="back-home">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default Congratulations;