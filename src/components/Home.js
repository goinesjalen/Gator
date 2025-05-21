// components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/RSVP.css';

const Home = () => {
  // Array of photos (stock photos that you will replace)
  const photos = [
    process.env.PUBLIC_URL + "/img/IMG_6542.JPG",
    process.env.PUBLIC_URL + "/img/IMG_6545.JPG",
    process.env.PUBLIC_URL + "/img/IMG_6549.JPG",
    process.env.PUBLIC_URL + "/img/IMG_6561.JPG",
    process.env.PUBLIC_URL + "/img/IMG_6564.JPG",
  ];
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set wedding date - replace with actual date and time
  const weddingDate = new Date('2025-08-15T16:00:00');
  
  // Function to update countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Function to cycle through photos
  useEffect(() => {
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    
    return () => clearInterval(photoInterval);
  }, [photos.length]);
  
  return (
    <div className="home-container">
      <div className="photo-gallery">
        <div className="main-photo" style={{ backgroundImage: `url(${photos[currentPhotoIndex]})` }}></div>
        <div className="thumbnail-container">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${photo})` }}
              onClick={() => setCurrentPhotoIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="invitation-card">
        <div className="invitation-content">
          <h3 className="invite-header">You are cordially invited to celebrate the marriage of</h3>
          <h1 className="couple-names">Jack <span className="and">&</span> Jill</h1>
          <p className="wedding-date">August 15th, 2025 at 4 o'clock in the afternoon</p>
          <p className="wedding-location">The Grand Pavilion<br/>123 Garden Avenue<br/>Meadowbrook, CA 94321</p>
        </div>
      </div>
      
      {/* Add RSVP Banner */}
      <div className="rsvp-banner">
        <div className="rsvp-banner-text">
          <h3>Please let us know if you can make it!</h3>
          <p>We kindly request your response by July 15th, 2025</p>
        </div>
        <Link to="/rsvp" className="rsvp-banner-button">RSVP Now</Link>
      </div>
      
      <div className="countdown-section">
        <h2>Countdown to the Big Day</h2>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      
      <div className="venue-map">
        <h2>Venue Location</h2>
        <iframe 
          title="Wedding Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5381017083378!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjAiTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1589945954967!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0">
        </iframe>
      </div>
      
      <div className="navigation-links">
        <Link to="/attire" className="nav-link">
          <div className="nav-card">
            <h3>Attire Guide</h3>
            <p>Dress code and suggestions</p>
          </div>
        </Link>
        <Link to="/day-of" className="nav-link">
          <div className="nav-card">
            <h3>Day-of Instructions</h3>
            <p>Schedule and important details</p>
          </div>
        </Link>
        <Link to="/congratulations" className="nav-link">
          <div className="nav-card">
            <h3>Congratulations</h3>
            <p>Special messages for the couple</p>
          </div>
        </Link>
      </div>
      
      <footer>
        <p>Jack & Jill | August 15th, 2025</p>
        <p>#JackAndJill2025</p>
      </footer>
    </div>
  );
};

export default Home;