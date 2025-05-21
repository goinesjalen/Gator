// components/DayOf.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const DayOf = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Day-of Instructions</h1>
        <p>Everything you need to know for Jack & Jill's wedding day</p>
      </div>
      
      <div className="page-content">
        <div className="content-section timeline">
          <h2>Schedule of Events</h2>
          
          <div className="timeline-item">
            <div className="timeline-time">3:30 PM</div>
            <div className="timeline-content">
              <h3>Guest Arrival</h3>
              <p>Please arrive 30 minutes before the ceremony begins. Ushers will be available to guide you to your seats.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-time">4:00 PM</div>
            <div className="timeline-content">
              <h3>Ceremony Begins</h3>
              <p>The ceremony will take place in the Rose Garden and will last approximately 30 minutes.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-time">4:30 PM</div>
            <div className="timeline-content">
              <h3>Cocktail Hour</h3>
              <p>Enjoy drinks and hors d'oeuvres on the East Terrace while the couple takes photos.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-time">5:30 PM</div>
            <div className="timeline-content">
              <h3>Reception Begins</h3>
              <p>Dinner will be served in the Grand Pavilion. Seating cards will be available at the entrance.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-time">7:00 PM</div>
            <div className="timeline-content">
              <h3>Dancing & Celebration</h3>
              <p>The dance floor opens! Join us for an evening of music and celebration.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-time">10:00 PM</div>
            <div className="timeline-content">
              <h3>Farewell Send-off</h3>
              <p>Join us in a special farewell to the newlyweds as they depart.</p>
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <h2>Parking Information</h2>
          <p>Complimentary valet parking will be available at the venue entrance. If you prefer to self-park, there is a designated lot on the north side of the property with shuttle service to the ceremony location.</p>
        </div>
        
        <div className="content-section">
          <h2>Photography Policy</h2>
          <p>We have professional photographers capturing our special day. We kindly request that guests refrain from taking photos during the ceremony to allow our photographers to do their job and to ensure you are fully present with us. After the ceremony, you're welcome to take as many photos as you'd like!</p>
        </div>
        
        <div className="content-section">
          <h2>Special Accommodations</h2>
          <p>If you require any special accommodations or have dietary restrictions, please contact our wedding coordinator at coordinator@jackandjill2025.com no later than July 15th.</p>
        </div>
      </div>
      
      <div className="page-navigation">
        <Link to="/" className="back-home">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default DayOf;