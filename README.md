# Jack & Jill Wedding Invitation Website

A modern, elegant wedding invitation website for Jack and Jill's wedding celebration.

## Features

- Beautiful photo gallery with slideshow
- Elegant invitation design
- Real-time countdown to the wedding day
- Google Maps integration for venue location
- Information pages for attire guidelines and day-of instructions
- Special congratulations page for friends and family messages

## Project Structure

```
jack-and-jill-wedding/
├── public/
│   ├── img/                  # Image directory (add your photos here)
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/           # React components
│   │   ├── Home.js           # Main invitation page
│   │   ├── Attire.js         # Attire guidelines page
│   │   ├── DayOf.js          # Day-of instructions page
│   │   └── Congratulations.js # Messages from friends and family
│   ├── styles/               # CSS files
│   │   ├── App.css           # Global styles
│   │   ├── Home.css          # Styles for home component
│   │   └── Pages.css         # Styles for other pages
│   ├── App.js                # Main application component
│   └── index.js              # Application entry point
└── package.json              # Project dependencies and scripts
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/jack-and-jill-wedding.git
   cd jack-and-jill-wedding
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Add your photos**
   - Create an `img` directory in the `public` folder
   - Add your couple photos named as:
     - couple-1.jpg
     - couple-2.jpg
     - etc.
   - Add attire example photos:
     - women-attire.jpg
     - men-attire.jpg
   - Add friend photos for the congratulations page:
     - friend-1.jpg
     - friend-2.jpg
     - etc.

4. **Customize the content**
   - Update the wedding date in `src/components/Home.js`
   - Update the venue address and map coordinates
   - Customize the attire guidelines in `src/components/Attire.js`
   - Modify the schedule in `src/components/DayOf.js`
   - Add real congratulations messages in `src/components/Congratulations.js`

5. **Test the website locally**
   ```
   npm start
   ```

6. **Deploy to GitHub Pages**
   
   First, update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/jack-and-jill-wedding"
   ```
   
   Then deploy:
   ```
   npm run deploy
   ```

## Customization

### Changing Colors

The color scheme can be modified in the `src/styles/App.css` file. Look for the `:root` CSS variable declarations:

```css
:root {
  --primary-color: #f8f5f0; /* Soft off-white */
  --accent-color: #d4c1a9; /* Warm beige */
  --text-color: #3a3a3a; /* Dark gray for text */
  --border-color: #e0d5c5; /* Light beige for borders */
  --highlight-color: #b6a48b; /* Darker beige for highlights */
  --shadow-color: rgba(0, 0, 0, 0.05);
}
```

### Adding More Pages

1. Create a new component in the `src/components` directory
2. Add the route in `src/App.js`
3. Add a link to the new page in the navigation section of `src/components/Home.js`

## Technologies Used

- React.js
- React Router
- CSS3
- GitHub Pages

## License

This project is for personal use only.