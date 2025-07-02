import { api } from './api.js';
export function loadPage() {
    const app = document.getElementById('app');

    const header = document.createElement('header');
    header.innerHTML = `<h1>Weather App</h1>`;

    const main = document.createElement('main');

    const footer = document.createElement('footer');
    footer.innerHTML = `<small>&copy; 2025 Mi Sitio</small>`;

    app.append(header, main, footer);
    const weatherDiv = api();
    main.append(weatherDiv);


}
