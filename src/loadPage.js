import { api } from './api.js';
export function loadPage() {
    const app = document.getElementById('app');

    const header = document.createElement('header');
    header.innerHTML = `<h1>Weather App</h1>`;

    const main = document.createElement('main');

    const footer = document.createElement('footer');
    footer.innerHTML = `<small>&copy; 2025 Mi Sitio</small>`;

    const toggleTheme = document.createElement('button');
    toggleTheme.id = 'toggleTheme';

    

    app.append(header, main, footer);
    const weatherDiv = api();
    header.append(toggleTheme);
    main.append(weatherDiv);

    const toggleBtn = document.getElementById('toggleTheme');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    const grid = document.getElementById('weatherContainer');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        grid.classList.add('dark');

        toggleBtn.textContent = '🌞';
    } else {
        toggleBtn.textContent = '🌙';
    }

    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark') && grid.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleBtn.textContent = isDark ? '🌞' : '🌙';

    });

}
