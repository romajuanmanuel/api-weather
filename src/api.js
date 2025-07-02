// api.js
export function api() {
    const container = document.createElement('div');
    container.id = "weatherContainer";

    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/MAR%20DEL%20PLATA?unitGroup=us&key=UU5S77GZAASBEEW6Y8A4D86M6&contentType=json')
        .then(response => response.json())
        .then(data => {
            const current = data.currentConditions;

            // Función auxiliar para convertir datos de días
            const parseDay = (dayData, label, isToday = false) => {
                const temp = ((dayData.temp - 32) * 5 / 9).toFixed(1);
                const tempMax = ((dayData.tempmax - 32) * 5 / 9).toFixed(1);
                const tempMin = ((dayData.tempmin - 32) * 5 / 9).toFixed(1);
                const windKM = (dayData.windspeed * 1.852).toFixed(1);
                const windDir = dayData.winddir;
                const humidity = dayData.humidity;

                const actualTemp = isToday ? ((current.temp - 32) * 5 / 9).toFixed(1) : temp;

                return `
                    <div class="day-block">
                        <h3>${label}</h3>
                        <p><span class="label">Fecha:</span> ${dayData.datetime}</p>
                        <p><span class="label">Descripción:</span> ${dayData.description || "Sin datos"}</p>
                        <p><span class="label">Temp Actual:</span> ${actualTemp} °C</p>
                        <p><span class="label">Temp Máxima:</span> ${tempMax} °C</p>
                        <p><span class="label">Temp Mínima:</span> ${tempMin} °C</p>
                        <p><span class="label">Viento:</span> ${windKM} km/h</p>
                        <p><span class="label">Dirección Viento:</span> ${windDir}°</p>
                        <p><span class="label">Humedad:</span> ${humidity}%</p>
                    </div>
                `;
            };
            const hoy = parseDay(data.days[0], "Hoy", true);
            const ayer = parseDay(data.days[1], "Ayer");
            const mañana = parseDay(data.days[2], "Mañana");

            container.innerHTML = `
                <h2>Clima en ${data.resolvedAddress}</h2>
                <div class="weather-grid">
                    ${ayer}
                    ${hoy}
                    ${mañana}
                </div>
            `;
        })
        .catch(err => {
            console.error(err);
            container.textContent = 'Error al cargar el clima.';
        });

    return container;
}
