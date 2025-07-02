// api.js
export function api() {
    const container = document.createElement('div');
    container.id="wheaterContainer"

    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/MAR%20DEL%20PLATA?unitGroup=us&key=UU5S77GZAASBEEW6Y8A4D86M6&contentType=json')
        .then(response => response.json())
        .then(data => {
            const tempF = data.days[0].temp;
            const tempC = ((tempF - 32) * 5 / 9).toFixed(1);
            const windN =  data.days[0].windspeed;
            const windKM = (windN*1.852).toFixed(1);
            const max = data.days[0].tempmax;
            const tempmax = ((max - 32) * 5 / 9).toFixed(1);
            const min = data.days[0].tempmin;
            const tempmin = ((min - 32) * 5 / 9).toFixed(1);
            container.innerHTML = `
                <h2>Clima</h2>
                <p>Localidad: ${data.resolvedAddress}</p>
                <p>Fecha: ${data.days[0].datetime} </p>
                <p>Desc: ${data.description}</p>
                <p>Temperatura: ${tempC} °C</p>
                <p>Probabilidad Lluvia: ${data.days[0].precipprob}</p>
                <p>Velocidad del viento: ${windKM} km/h</p>
                <p>Temp Max: ${tempmax} °C</p>
                <p>Temp Min: ${tempmin} °C</p>
                <p>Humedad: ${data.days[0].humidity}% </p>

            `;
        })
        .catch(err => {
            container.textContent = 'Error al cargar el clima.';
        });

    return container;
}