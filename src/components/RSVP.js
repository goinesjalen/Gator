// components/RSVP.js
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../styles/Pages.css';
import '../styles/RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attending: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    message: '',
    timestamp: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [pastDeadline, setPastDeadline] = useState(false);
  
  // Check if past RSVP deadline (July 15, 2025)
  useEffect(() => {
    const now = new Date();
    const deadline = new Date('2025-07-15');
    setPastDeadline(now > deadline);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Add timestamp
      const timestamp = new Date().toISOString();
      const dataToSubmit = { ...formData, timestamp };
      
      // Google Apps Script deployed URL
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzpANmNbat1hiGGiNRUteQS_-00sEjh3q97mayLEhfsyTF_jBo3MN-SsVaJMK_RWJsNwQ/exec';
      
      // Submit data to Google Sheet using fetch API
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });

      console.log('Response:', response);
      
      setSubmitted(true);
      setFormData(prevState => ({
        ...prevState,
        timestamp
      }));
      
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('There was an error submitting your RSVP. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Redirect if past deadline
  if (pastDeadline) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>RSVP</h1>
        <p>Please respond by July 15th, 2025</p>
      </div>
      
      <div className="page-content">
        {!submitted ? (
          <>
            <div className="content-section intro">
              <p>We hope you can join us for our special day! Please fill out the form below to let us know if you'll be attending.</p>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name*</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Will you be attending?*</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input 
                      type="radio" 
                      id="attending-yes" 
                      name="attending" 
                      value="yes" 
                      checked={formData.attending === 'yes'} 
                      onChange={handleChange} 
                    />
                    <label htmlFor="attending-yes">Happily Accept</label>
                  </div>
                  
                  <div className="radio-option">
                    <input 
                      type="radio" 
                      id="attending-no" 
                      name="attending" 
                      value="no" 
                      checked={formData.attending === 'no'} 
                      onChange={handleChange} 
                    />
                    <label htmlFor="attending-no">Regretfully Decline</label>
                  </div>
                </div>
              </div>
              
              {formData.attending === 'yes' && (
                <>
                  <div className="form-group">
                    <label htmlFor="guestCount">Number of Guests (including yourself)*</label>
                    <select 
                      id="guestCount" 
                      name="guestCount" 
                      value={formData.guestCount} 
                      onChange={handleChange}
                      required
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                    <textarea 
                      id="dietaryRestrictions" 
                      name="dietaryRestrictions" 
                      value={formData.dietaryRestrictions} 
                      onChange={handleChange}
                      placeholder="Please list any dietary restrictions or allergies"
                    />
                  </div>
                </>
              )}
              
              <div className="form-group">
                <label htmlFor="message">Message to the Couple (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Share your well wishes or a special memory"
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit RSVP'}
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>Your RSVP has been received. We're {formData.attending === 'yes' ? 'excited to celebrate with you!' : 'sorry you can\'t make it and will miss you.'}</p>
            <p>We will send you updates as the date approaches.</p>
            
            {formData.attending === 'yes' && (
              <div className="confirmation-details">
                <h3>Your RSVP Details:</h3>
                <p><strong>Name:</strong> {formData.fullName}</p>
                <p><strong>Number of Guests:</strong> {formData.guestCount}</p>
                {formData.dietaryRestrictions && (
                  <p><strong>Dietary Restrictions:</strong> {formData.dietaryRestrictions}</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="page-navigation">
        <Link to="/" className="back-home">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default RSVP;