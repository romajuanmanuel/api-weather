
# 🌤️ Weather App with City Autocomplete

Simple weather forecast app built with vanilla JavaScript that fetches 15-day weather data from the [Visual Crossing Weather API](https://www.visualcrossing.com/), including temperature, wind, and humidity. Includes a local autocomplete system for city input.

---

## 🚀 Features

- Search weather by city name
- Displays current weather and daily forecast (15 days)
- Temperature converted to Celsius
- Responsive UI (mobile-friendly)
- Written with modern JavaScript (ES modules, async/await)

---

## 📁 Project Structure

```
📦 api-wheater/
├── dist/ # Webpack build output
├── node_modules/ # Dependencies
├── src/ # Source files
│ ├── api.js # API call to Visual Crossing
│ ├── index.js # Main app logic and event handlers
│ ├── loadPage.js # DOM rendering and layout logic
│ └── styles.css # CSS styles
├── .gitignore
├── index.html # Entry HTML file
├── package.json # Project metadata and scripts
├── package-lock.json # Dependency lock file
└── webpack.config.js # Webpack configuration
```

---

## ⚙️ Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/tu-usuario/weather-app.git
   cd weather-app
   ```

2. **Add your API key**:  
   Edit the file `api.js` and replace `API_KEY` with your own from [Visual Crossing](https://www.visualcrossing.com/weather-api).

   ```js
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

3. **Open in browser**:
   - You can simply open `index.html` in your browser.
   - Or serve it locally with a tool like VS Code Live Server or:
     ```bash
     npx serve
     ```

---

## 🧠 How It Works

### `getWeatherData(city)`
- Fetches weather forecast and current conditions from the Visual Crossing API.
- Converts values to metric units (°C, km/h).

### `renderWeatherGrid(data)`
- Creates DOM elements to display forecast cards using received data.

---

## 📌 Requirements

- Modern browser (Chrome, Firefox, Edge)
- Visual Crossing API key

---

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- [Visual Crossing Weather API](https://www.visualcrossing.com/)

---

## 📝 License

This project is licensed under the MIT License.
