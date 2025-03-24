document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sectionVelocidad').style.display = 'none';
    document.getElementById('sectionDistancia').style.display = 'none';
    document.getElementById('sectionTiempo').style.display = 'none';

    document.getElementById('datoFaltante').addEventListener('change', mostrarSeccion);

    document.getElementById('calcularBotonVelocidad').addEventListener('click', calcularVelocidadMU);
    document.getElementById('calcularBotonDistancia').addEventListener('click', calcularDistanciaMU);
    document.getElementById('calcularBotonTiempo').addEventListener('click', calcularTiempoMU);
});

function mostrarSeccion() {
    const seleccion = document.getElementById('datoFaltante').value;

    document.getElementById('sectionVelocidad').style.display = 'none';
    document.getElementById('sectionDistancia').style.display = 'none';
    document.getElementById('sectionTiempo').style.display = 'none';

    if (seleccion === 'velocidad') {
        document.getElementById('sectionVelocidad').style.display = 'block';
    } else if (seleccion === 'distancia') {
        document.getElementById('sectionDistancia').style.display = 'block';
    } else if (seleccion === 'tiempo') {
        document.getElementById('sectionTiempo').style.display = 'block';
    }
}

function convertirUnidades(valor, unidadOrigen, unidadDestino) {
    const factoresConversion = {
        'm': 1,
        'km': 1000,
        'cm': 0.01,
        's': 1,
        'mn': 60,
        'h': 3600,
        'm/s': 1,
        'km/h': 0.277778
    };

    return (valor * factoresConversion[unidadOrigen]) / factoresConversion[unidadDestino];
}

function calcularVelocidadMU() {
    const distancia = parseFloat(document.getElementById('distanciaMU').value);
    const tiempo = parseFloat(document.getElementById('tiempoMU').value);
    const unidadDistancia = document.getElementById('unidadDistanciaVelocidad').value;
    const unidadTiempo = document.getElementById('unidadTiempoVelocidad').value;

    if (isNaN(distancia) || isNaN(tiempo) || tiempo === 0) {
        document.getElementById('resultadoMU').innerText = 'Por favor, ingresa valores válidos y asegúrate de que el tiempo no sea 0.';
        return;
    }

    // Convertimos distancia a metros y tiempo a segundos
    const distanciaEnMetros = convertirUnidades(distancia, unidadDistancia, 'm');
    const tiempoEnSegundos = convertirUnidades(tiempo, unidadTiempo, 's');

    const velocidad = distanciaEnMetros / tiempoEnSegundos;

    document.getElementById('resultadoMU').innerText = 'La velocidad es: ' + velocidad.toFixed(2) + ' m/s';
}

function calcularDistanciaMU() {
    const velocidad = parseFloat(document.getElementById('velocidadDistancia').value);
    const tiempo = parseFloat(document.getElementById('tiempoDistancia').value);
    const unidadVelocidad = document.getElementById('unidadVelocidadDistancia').value;
    const unidadTiempo = document.getElementById('unidadTiempoDistancia').value;

    if (isNaN(velocidad) || isNaN(tiempo) || tiempo === 0) {
        document.getElementById('resultadoDistancia').innerText = 'Por favor, ingresa valores válidos.';
        return;
    }

    // Convertimos velocidad a m/s y tiempo a segundos
    const velocidadEnMetrosPorSegundo = convertirUnidades(velocidad, unidadVelocidad, 'm/s');
    const tiempoEnSegundos = convertirUnidades(tiempo, unidadTiempo, 's');

    const distancia = velocidadEnMetrosPorSegundo * tiempoEnSegundos;

    document.getElementById('resultadoDistancia').innerText = 'La distancia es: ' + distancia.toFixed(2) + ' m';
}

function calcularTiempoMU() {
    const distancia = parseFloat(document.getElementById('distanciaTiempo').value);
    const velocidad = parseFloat(document.getElementById('velocidadTiempo').value);
    const unidadDistancia = document.getElementById('unidadDistanciaTiempo').value;
    const unidadVelocidad = document.getElementById('unidadVelocidadTiempo').value;

    if (isNaN(distancia) || isNaN(velocidad) || velocidad === 0) {
        document.getElementById('resultadoTiempo').innerText = 'Por favor, ingresa valores válidos.';
        return;
    }

    // Convertimos distancia a metros y velocidad a m/s
    const distanciaEnMetros = convertirUnidades(distancia, unidadDistancia, 'm');
    const velocidadEnMetrosPorSegundo = convertirUnidades(velocidad, unidadVelocidad, 'm/s');

    const tiempo = distanciaEnMetros / velocidadEnMetrosPorSegundo;

    document.getElementById('resultadoTiempo').innerText = 'El tiempo es: ' + tiempo.toFixed(2) + ' s';
}
