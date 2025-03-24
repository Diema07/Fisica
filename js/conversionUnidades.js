document.addEventListener('DOMContentLoaded', function () {
    // Convertir Distancia
    document.getElementById('convertirBotonDistancia').addEventListener('click', function () {
        const valor = parseFloat(document.getElementById('valorDistancia').value);
        const unidadOrigen = document.getElementById('unidadOrigenDistancia').value;
        const unidadDestino = document.getElementById('unidadDestinoDistancia').value;

        if (isNaN(valor)) {
            document.getElementById('resultadoDistanciaDecimal').innerText = 'Por favor, ingrese un valor válido.';
            return;
        }

        const resultado = convertirDistancia(valor, unidadOrigen, unidadDestino);

        // Mostrar el resultado en decimal y en notación científica
        document.getElementById('resultadoDistanciaDecimal').innerText = 'Resultado en decimal: ' + resultado.decimal.toFixed(2);
        document.getElementById('resultadoDistanciaCientifica').innerText = 'Resultado en notación científica: ' + resultado.cientifica;
        document.getElementById('resultadoDistancia').innerText = ''; // Limpiar mensajes de error
    });

    // Convertir Tiempo
    document.getElementById('convertirBotonTiempo').addEventListener('click', function () {
        const valor = parseFloat(document.getElementById('valorTiempo').value);
        const unidadOrigen = document.getElementById('unidadOrigenTiempo').value;
        const unidadDestino = document.getElementById('unidadDestinoTiempo').value;

        if (isNaN(valor)) {
            document.getElementById('resultadoTiempoDecimal').innerText = 'Por favor, ingrese un valor válido.';
            return;
        }

        const resultado = convertirTiempo(valor, unidadOrigen, unidadDestino);

        // Mostrar el resultado en decimal y en notación científica
        document.getElementById('resultadoTiempoDecimal').innerText = 'Resultado en decimal: ' + resultado.decimal.toFixed(2);
        document.getElementById('resultadoTiempoCientifica').innerText = 'Resultado en notación científica: ' + resultado.cientifica;
        document.getElementById('resultadoTiempo').innerText = ''; // Limpiar mensajes de error
    });

    // Convertir Velocidad
    document.getElementById('convertirBotonVelocidad').addEventListener('click', function () {
        const valor = parseFloat(document.getElementById('valorVelocidad').value);
        const unidadOrigen = document.getElementById('unidadOrigenVelocidad').value;
        const unidadDestino = document.getElementById('unidadDestinoVelocidad').value;

        if (isNaN(valor)) {
            document.getElementById('resultadoVelocidadDecimal').innerText = 'Por favor, ingrese un valor válido.';
            return;
        }

        const resultado = convertirVelocidad(valor, unidadOrigen, unidadDestino);

        // Mostrar el resultado en decimal y en notación científica
        document.getElementById('resultadoVelocidadDecimal').innerText = 'Resultado en decimal: ' + resultado.decimal.toFixed(2);
        document.getElementById('resultadoVelocidadCientifica').innerText = 'Resultado en notación científica: ' + resultado.cientifica;
        document.getElementById('resultadoVelocidad').innerText = ''; // Limpiar mensajes de error
    });
});

// Funciones de conversión

function convertirDistancia(valor, origen, destino) {
    const conversiones = {
        m: 1,
        km: 1000,
        cm: 0.01
    };

    const valorEnMetros = valor * conversiones[origen];
    const valorConvertido = valorEnMetros / conversiones[destino];

    return {
        decimal: valorConvertido,
        cientifica: formatoNotacionCientifica(valorConvertido)
    };
}

function convertirTiempo(valor, origen, destino) {
    const conversiones = {
        s: 1,
        mn: 60,
        h: 3600
    };

    const valorEnSegundos = valor * conversiones[origen];
    const valorConvertido = valorEnSegundos / conversiones[destino];

    return {
        decimal: valorConvertido,
        cientifica: formatoNotacionCientifica(valorConvertido)
    };
}

function convertirVelocidad(valor, origen, destino) {
    const conversiones = {
        'm/s': 1,
        'km/h': 0.277778
    };

    const valorEnMS = valor * conversiones[origen];
    const valorConvertido = valorEnMS / conversiones[destino];

    return {
        decimal: valorConvertido,
        cientifica: formatoNotacionCientifica(valorConvertido)
    };
}

// Función para formatear a notación científica (x * 10^y)
function formatoNotacionCientifica(valor) {
    if (valor === 0) return '0';

    const exponente = Math.floor(Math.log10(Math.abs(valor)));
    const mantisa = valor / Math.pow(10, exponente);

    // Ajustar la cantidad de decimales en función del exponente
    let decimales;
    if (exponente < -2 || exponente > 2) {
        decimales = 2; // Para exponentes muy bajos o muy altos, 2 decimales
    } else {
        decimales = 6; // Para exponentes más moderados, 6 decimales
    }

    return mantisa.toFixed(decimales) + ' × 10^' + exponente;
}
