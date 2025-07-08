// loadPage.js
import { getWeatherData, renderWeatherGrid } from './api.js';

export function loadPage() {
  const app = document.getElementById('app');

  const header = document.createElement('header');
  header.innerHTML = `<h1>Weather App</h1>`;

  const toggleTheme = document.createElement('button');
  toggleTheme.id = 'toggleTheme';
  header.append(toggleTheme);

  const main = document.createElement('main');
  const footer = document.createElement('footer');
  footer.innerHTML = `<small>&copy; 2025 Mi Sitio</small>`;

  const form = document.createElement('form');
  form.id = 'weatherForm';

  const input = document.createElement('input');
  input.id = 'locationInput';
  input.type = 'text';
  input.placeholder = 'Ingrese su ciudad';
  input.required = true;

  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.textContent = 'Consultar';

  form.append(input, btn);
  main.append(form);
  app.append(header, main, footer);

  // Toggle Theme
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleTheme.textContent = '🌞';
  } else {
    toggleTheme.textContent = '🌙';
  }

  toggleTheme.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleTheme.textContent = isDark ? '🌞' : '🌙';
  });

  // Fetch default weather
  fetchAndRenderWeather('Mar del Plata', main);

  // Form submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) {
      fetchAndRenderWeather(city, main);
    }
  });
}

async function fetchAndRenderWeather(city, main) {
  try {
    const data = await getWeatherData(city);
    const weatherElement = renderWeatherGrid(data);
    const oldWeather = document.getElementById('weatherContainer');
    if (oldWeather) oldWeather.remove();
    main.append(weatherElement);
  } catch (err) {
    const errorDiv = document.createElement('div');
    errorDiv.id = 'weatherContainer';
    errorDiv.textContent = 'No se pudo cargar el clima.';
    main.append(errorDiv);
  }
}
