# Global Informer - News App

A modern, responsive news application that fetches and displays news articles from various categories. Features a sleek dark mode and light mode toggle for user preference.

## Features

- **News Categories**: Browse news by categories like Cricket, India, Technology, and Politics.
- **Search Functionality**: Search for specific news topics.
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Real-time News**: Fetches latest news using NewsAPI.

## Tech Stack

- **HTML5**: Structure and layout
- **CSS3**: Styling with CSS variables for theme switching
- **JavaScript (ES6)**: Dynamic functionality and API integration

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/global-informer.git
   cd global-informer
   ```

2. Open `index.html` in your web browser.

3. The app will load with default "Technology" news. Click on category buttons or use the search bar to explore news.

## API Configuration

This app uses [NewsAPI](https://newsapi.org/) for fetching news data.

- The API key is currently hardcoded in `script.js` for demonstration purposes.
- For production use, consider moving the API key to a secure environment variable or backend service.

## Project Structure

```
global-informer/
├── index.html          # Main HTML file
├── style.css           # CSS styles with theme variables
├── script.js           # JavaScript for functionality
├── assets/             # Images and assets
│   └── news.png        # Logo image
└── README.md           # This file
```

📸 Screenshots
Home Page (Light Mode)
<img width="1886" height="916" alt="Screenshot 2025-10-03 205605" src="https://github.com/user-attachments/assets/aa165909-c4e2-4823-825e-58c845fbb1be" />

Home Page (Dark Mode)
<img width="1878" height="909" alt="Screenshot 2025-10-03 205628" src="https://github.com/user-attachments/assets/c3ff28d1-6014-44e5-b264-4be0786e6aa2" />

## Features in Detail

### Theme Toggle
- Click the "Dark Mode" / "Light Mode" button to switch themes.
- Preference is saved in localStorage and persists across sessions.

### Navigation
- Logo on the left
- Centered category links
- Search bar and theme toggle on the right

### News Cards
- Displays article image, title, source, and date
- Click on cards to open full article in new tab
- Hover effects for better UX

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This app is for educational purposes. Ensure compliance with NewsAPI terms of service for any commercial use.
