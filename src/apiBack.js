// api.js
export function api() {
    const container = document.createElement('div');
    container.id = "weatherContainer"

    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/MAR%20DEL%20PLATA?unitGroup=us&key=UU5S77GZAASBEEW6Y8A4D86M6&contentType=json')
        .then(response => response.json())
        .then(data => {
            const tempF = data.days[0].temp;
            const tempC = ((tempF - 32) * 5 / 9).toFixed(1);
            const windN = data.days[0].windspeed;
            const windKM = (windN * 1.852).toFixed(1);
            const max = data.days[0].tempmax;
            const tempmax = ((max - 32) * 5 / 9).toFixed(1);
            const min = data.days[0].tempmin;
            const tempmin = ((min - 32) * 5 / 9).toFixed(1);
            const current = data.currentConditions;
            const currentTemp = ((current.temp - 32) * 5 / 9).toFixed(1);
            container.innerHTML = `
    <h2>Clima</h2>
    <div class="weather-grid">
        <p><span class="label">Localidad:</span> ${data.resolvedAddress}</p>
        <p><span class="label">Fecha:</span> ${data.days[0].datetime}</p>
        <p><span class="label">Descripción:</span> ${data.description}</p>
        <p><span class="label">Temperatura:</span> ${tempC} °C</p>
        <p><span class="label">Prob. de Lluvia:</span> ${data.days[0].precipprob}%</p>
        <p><span class="label">Viento:</span> ${windKM} km/h</p>
        <p><span class="label">Máxima:</span> ${tempmax} °C</p>
        <p><span class="label">Mínima:</span> ${tempmin} °C</p>
        <p><span class="label">Humedad:</span> ${data.days[0].humidity}%</p>
        <p><span class="label">Última Actualización:</span> ${current.datetime}</p>
        <p><span class="label">Temp Actual:</span> ${currentTemp} °C</p>
    </div>
`;
        })
        .catch(err => {
            container.textContent = 'Error al cargar el clima.';
        });

    return container;
}