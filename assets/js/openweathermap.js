$('#buscar_clima').on('click', function () {
    let ciudad_buscada = $('#ciudad_buscada').val();

    if (ciudad_buscada.trim().length > 0) {
        let units = 'metric';
        let lang = 'es';
        let apiid = 'b21f879741eb0f268a8a86de4a2de67c';
        let urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad_buscada}&lang=${lang}&units=${units}&appid=${apiid}`;

        $.getJSON(urlClima, function (dataClima) {
            let urlPais = `https://restcountries.com/v3.1/alpha/${dataClima.sys.country}`;
            $.getJSON(urlPais, function (dataPais) {
                let html =
                    `<h4 class>${dataClima.name} (${dataPais[0].translations.spa.common}): ${dataClima.weather[0].description}</h4>
                    <h4>Temperatura: ${dataClima.main.temp}°C</h4>
                    <h4>Sensación Térmica: ${dataClima.main.feels_like}°C</h4>
                    <h4>Humedad: ${dataClima.main.humidity}%</h4>
                    <h4>Viento: ${dataClima.wind.speed}m/s</h4>
                    <h4>Coordenadas: ${dataClima.coord.lat},${dataClima.coord.lon}</h4>`;

                $('#info-clima').html(html);

                let img = `<img src="https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png" />`;

                $('#img-clima').html(img);
            });
        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La ciudad ingresada no existe en el mundo mundial!',
                confirmButtonText: 'Ok'
            })
        });
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar una ciudad para su búsqueda!',
            confirmButtonText: 'Ok'
        })
    }
});