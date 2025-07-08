// api.js
const API_KEY = 'UU5S77GZAASBEEW6Y8A4D86M6';
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function getWeatherData(city) {
  const url = `${BASE_URL}/${encodeURIComponent(city)}?unitGroup=us&key=${API_KEY}&contentType=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se pudo obtener el clima.");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function renderWeatherCard(dayData, current, label, isToday = false) {
  const tempMax = ((dayData.tempmax - 32) * 5 / 9).toFixed(1);
  const tempMin = ((dayData.tempmin - 32) * 5 / 9).toFixed(1);
  const windKM = (dayData.windspeed * 1.852).toFixed(1);
  const windDir = dayData.winddir.toFixed(1);
  const humidity = dayData.humidity.toFixed(1);
  const currentTemp = ((current?.temp - 32) * 5 / 9).toFixed(1);

  return `
    <article class="weather-card${isToday ? ' today' : ''}">
      <header class="card-header">
        <h3>${label}</h3>
        <time datetime="${dayData.datetime}">${dayData.datetime}</time>
      </header>
      <div class="card-body">
        <p class="description">${dayData.description || "Sin datos"}</p>
        <ul class="stats-list">
          ${isToday ? `<li><strong>Ahora:</strong> ${currentTemp} °C</li>` : ""}
          <li><strong>Máx:</strong> ${tempMax} °C</li>
          <li><strong>Mín:</strong> ${tempMin} °C</li>
          <li><strong>Viento:</strong> ${windKM} km/h (${windDir}°)</li>
          <li><strong>Humedad:</strong> ${humidity}%</li>
        </ul>
      </div>
    </article>`;
}

export function renderWeatherGrid(data) {
  const container = document.createElement('div');
  container.id = "weatherContainer";

  const cards = data.days.map((day, i) => {
    const dateObj = new Date(`${day.datetime}T00:00:00`);
    let nombre = dateObj.toLocaleDateString('es-AR', { weekday: 'long' });
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    return renderWeatherCard(day, data.currentConditions, nombre, i === 0);
  }).join('');

  container.innerHTML = `
    <h2>Clima en ${data.resolvedAddress}</h2>
    <div class="weather-grid">
      ${cards}
    </div>
  `;

  return container;
}
