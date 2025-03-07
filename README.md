# Shards of a Paradox - Conan Exiles Roleplaying Server Landing Page

A visually stunning and responsive landing page for the "Shards of a Paradox" fantasy roleplaying server in Conan Exiles. This project aims to provide an immersive introduction to the server's unique world, centered around the town of Axiom and its mystical elements like the portal network and ancient shrines.

## Features

- **Responsive Design**: Fully responsive layout that works beautifully on all devices, from mobile phones to large desktop screens.
- **Modern UI/UX**: Smooth animations, intuitive navigation, and visually appealing design elements.
- **Immersive Content**: Rich storytelling elements that introduce visitors to the server's unique fantasy world.
- **Optimized Performance**: Fast loading times and smooth scrolling for an excellent user experience.
- **Accessibility**: Implemented with web accessibility best practices.

## Project Structure

```
/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main stylesheet
│   └── responsive.css  # Responsive design styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (to be added)
└── README.md           # This file
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone [repository-url]
   cd shards-of-paradox
   ```

2. **Add your images**
   - Place your images in the `images/` directory
   - Required images:
     - `logo.png` - Server logo
     - `logo-footer.png` - Footer version of the logo
     - `hero-bg.jpg` - Hero section background
     - `axiom-town.jpg` - Image of the town of Axiom
     - `features-bg.jpg` - Features section background
     - `server-bg.jpg` - Server information section background
     - `discord-community.jpg` - Discord community image
     - `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` - Testimonial avatars
     - `gallery-1.jpg` through `gallery-4.jpg` - Community gallery images
     - `news-1.jpg`, `news-2.jpg`, `news-3.jpg` - News post images

3. **Update Discord and social media links**
   - Open `index.html` and update all links with your actual Discord invite and social media profiles

4. **Customize content**
   - Update the text content in `index.html` to match your server's lore, features, and information

5. **Launch the site**
   - Open `index.html` in a web browser to preview
   - Upload the files to your web hosting service to make the site live

## Customization

### Color Scheme

You can easily customize the color scheme by editing the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    /* Primary Color Palette */
    --primary-dark: #1a1a2e;
    --primary-medium: #16213e;
    --primary-light: #0f3460;
    --accent-gold: #c9a66b;
    --accent-red: #a02c2c;
    
    /* Text Colors */
    --text-light: #f9f9f9;
    --text-muted: #a0a0a0;
    --text-dark: #333333;
    
    /* Background Colors */
    --bg-dark: #0d1117;
    --bg-medium: #161b22;
    --bg-light: #21262d;
    --bg-card: rgba(22, 28, 36, 0.8);
}
```

### Fonts

To change fonts, update the font-family variables in the `:root` section and ensure you update the Google Fonts link in the `<head>` section of `index.html`.

## Browser Compatibility

The landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) - Cinzel, Marcellus, and Montserrat
- Icons: [Font Awesome](https://fontawesome.com/)

## License

This project is available for use under the [MIT License](LICENSE).

---

*"In the vast expanse of a fractured world, Axiom stands as a beacon for wanderers and adventurers alike."* 