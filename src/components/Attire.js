// components/Attire.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Attire = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Attire Guidelines</h1>
        <p>What to wear to Jack & Jill's wedding celebration</p>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <h2>Dress Code: Semi-Formal Garden Attire</h2>
          <p>We invite you to dress in semi-formal attire suitable for an outdoor garden celebration. The ceremony and reception will take place on manicured lawns and stone pathways, so please consider appropriate footwear.</p>
        </div>
        
        <div className="content-section">
          <h2>For the Ladies</h2>
          <p>Cocktail or tea-length dresses in light, airy fabrics are perfect for the occasion. Consider soft pastels or floral patterns that complement our garden setting. For footwear, wedges or block heels are recommended over stilettos to navigate the outdoor terrain.</p>
          
          <div className="image-placeholder" style={{ backgroundImage: "url('/img/women-attire.jpg')" }}></div>
        </div>
        
        <div className="content-section">
          <h2>For the Gentlemen</h2>
          <p>Suits or slacks with blazers are appropriate. Consider light colors like beige, light gray, or navy blue. Ties are optional but encouraged. Loafers or dress shoes will complete your look perfectly.</p>
          
          <div className="image-placeholder" style={{ backgroundImage: "url('/img/men-attire.jpg')" }}></div>
        </div>
        
        <div className="content-section">
          <h2>Weather Considerations</h2>
          <p>The ceremony and reception will be held outdoors in August. While we expect beautiful weather, it's advisable to bring a light wrap or jacket for the evening as temperatures may cool down. We will provide some shaded areas, but sun protection like hats or sunglasses might be beneficial.</p>
        </div>
      </div>
      
      <div className="page-navigation">
        <Link to="/" className="back-home">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default Attire;