document.addEventListener('DOMContentLoaded', function() {
    // Ocultar secciones según la selección
    hideAllInputs();

    document.getElementById('tipoCalculo').addEventListener('change', mostrarInputs);
    document.getElementById('calcularBoton').addEventListener('click', calcular);

    function hideAllInputs() {
        const inputGroups = ['calcularVelocidadFinal', 'calcularDistanciaFinal', 'calcularTiempo', 'calcularVelocidadInicial', 'calcularDistanciaInicial'];
        inputGroups.forEach(group => {
            document.getElementById(group).style.display = 'none';
        });
        document.getElementById("calcularBoton").style.display = 'none';
    }

    function mostrarInputs() {
        hideAllInputs();

        const tipo = document.getElementById('tipoCalculo').value;

        // Mostrar solo el grupo relevante
        if (tipo === 'velocidadFinal') {
            document.getElementById('calcularVelocidadFinal').style.display = 'block';
        } else if (tipo === 'distanciaFinal') {
            document.getElementById('calcularDistanciaFinal').style.display = 'block';
        } else if (tipo === 'tiempo') {
            document.getElementById('calcularTiempo').style.display = 'block';
        } else if (tipo === 'velocidadInicial') {
            document.getElementById('calcularVelocidadInicial').style.display = 'block';
        } else if (tipo === 'distanciaInicial') {
            document.getElementById('calcularDistanciaInicial').style.display = 'block';
        }
        document.getElementById('calcularBoton').style.display = 'block';
    }

    function calcular() {
        const tipo = document.getElementById('tipoCalculo').value;

        let camposValidos = validarCamposRequeridos(tipo);

        if (!camposValidos) {
            document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
            return; // Detener la ejecución si hay campos incompletos
        }

        if (tipo === 'velocidadFinal') {
            let V_i = parseFloat(document.getElementById('velocidadInicialVF').value);
            let a = parseFloat(document.getElementById('aceleracionVF').value);
            let t = parseFloat(document.getElementById('tiempoVF').value);

            // Unidades
            const unidadVelocidadInicial = document.getElementById('unidadVelocidadInicialVF').value;
            const unidadAceleracion = document.getElementById('unidadAceleracionVF').value;
            const unidadTiempo = document.getElementById('unidadTiempoVF').value;

            // Conversión de unidades
            if (unidadVelocidadInicial === 'km/h') {
                V_i = V_i / 3.6; // Convertir a m/s
            }
            if (unidadAceleracion === 'km/h2') {
                a = a / 12960; // Convertir a m/s²
            }
            if (unidadTiempo === 'h') {
                t = t * 3600; // Convertir a segundos
            }

            const V_f = V_i + a * t;
            document.getElementById('resultado').innerText = 'La velocidad final es: ' + V_f.toFixed(2) + ' m/s';

        } else if (tipo === 'distanciaFinal') {
            let V_i = parseFloat(document.getElementById('velocidadInicialDF').value);
            let a = parseFloat(document.getElementById('aceleracionDF').value);
            let t = parseFloat(document.getElementById('tiempoDF').value);

            // Unidades
            const unidadVelocidadInicial = document.getElementById('unidadVelocidadInicialDF').value;
            const unidadAceleracion = document.getElementById('unidadAceleracionDF').value;
            const unidadTiempo = document.getElementById('unidadTiempoDF').value;

            // Conversión de unidades
            if (unidadVelocidadInicial === 'km/h') {
                V_i = V_i / 3.6; // Convertir a m/s
            }
            if (unidadAceleracion === 'km/h2') {
                a = a / 12960; // Convertir a m/s²
            }
            if (unidadTiempo === 'h') {
                t = t * 3600; // Convertir a segundos
            }

            const X_f = V_i * t + 0.5 * a * t * t;
            document.getElementById('resultado').innerText = 'La distancia final es: ' + X_f.toFixed(2) + ' m';

        } else if (tipo === 'tiempo') {
            let X_f = parseFloat(document.getElementById('distanciaT').value);
            let V_i = parseFloat(document.getElementById('velocidadInicialT').value);
            let a = parseFloat(document.getElementById('aceleracionT').value);

            // Unidades
            const unidadDistancia = document.getElementById('unidadDistanciaT').value;
            const unidadVelocidadInicial = document.getElementById('unidadVelocidadInicialT').value;
            const unidadAceleracion = document.getElementById('unidadAceleracionT').value;

            // Conversión de unidades
            if (unidadDistancia === 'km') {
                X_f = X_f * 1000; // Convertir a metros
            }
            if (unidadVelocidadInicial === 'km/h') {
                V_i = V_i / 3.6; // Convertir a m/s
            }
            if (unidadAceleracion === 'km/h2') {
                a = a / 12960; // Convertir a m/s²
            }

            const t = (Math.sqrt(2 * a * X_f + V_i * V_i) - V_i) / a;
            document.getElementById('resultado').innerText = 'El tiempo es: ' + t.toFixed(2) + ' s';

        } else if (tipo === 'velocidadInicial') {
            let V_f = parseFloat(document.getElementById('velocidadFinalVI').value);
            let a = parseFloat(document.getElementById('aceleracionVI').value);
            let t = parseFloat(document.getElementById('tiempoVI').value);

            // Unidades
            const unidadVelocidadFinal = document.getElementById('unidadVelocidadFinalVI').value;
            const unidadAceleracion = document.getElementById('unidadAceleracionVI').value;
            const unidadTiempo = document.getElementById('unidadTiempoVI').value;

            // Conversión de unidades
            if (unidadVelocidadFinal === 'km/h') {
                V_f = V_f / 3.6; // Convertir a m/s
            }
            if (unidadAceleracion === 'km/h2') {
                a = a / 12960; // Convertir a m/s²
            }
            if (unidadTiempo === 'h') {
                t = t * 3600; // Convertir a segundos
            }

            const V_i = V_f - a * t;
            document.getElementById('resultado').innerText = 'La velocidad inicial es: ' + V_i.toFixed(2) + ' m/s';

        } else if (tipo === 'distanciaInicial') {
            let X_f = parseFloat(document.getElementById('distanciaFinalDI').value);
            let V_i = parseFloat(document.getElementById('velocidadInicialDI').value);
            let a = parseFloat(document.getElementById('aceleracionDI').value);
            let t = parseFloat(document.getElementById('tiempoDI').value);

            // Unidades
            const unidadDistanciaFinal = document.getElementById('unidadDistanciaFinalDI').value;
            const unidadVelocidadInicial = document.getElementById('unidadVelocidadInicialDI').value;
            const unidadAceleracion = document.getElementById('unidadAceleracionDI').value;
            const unidadTiempo = document.getElementById('unidadTiempoDI').value;

            // Conversión de unidades
            if (unidadDistanciaFinal === 'km') {
                X_f = X_f * 1000; // Convertir a metros
            }
            if (unidadVelocidadInicial === 'km/h') {
                V_i = V_i / 3.6; // Convertir a m/s
            }
            if (unidadAceleracion === 'km/h2') {
                a = a / 12960; // Convertir a m/s²
            }
            if (unidadTiempo === 'h') {
                t = t * 3600; // Convertir a segundos
            }

            const X_i = X_f - (V_i * t + 0.5 * a * t * t);
            document.getElementById('resultado').innerText = 'La distancia inicial es: ' + X_i.toFixed(2) + ' m';
            
        }
    }

    function validarCamposRequeridos(tipo) {
        let inputsRequeridos;

        if (tipo === 'velocidadFinal') {
            inputsRequeridos = ['velocidadInicialVF', 'aceleracionVF', 'tiempoVF'];
        } else if (tipo === 'distanciaFinal') {
            inputsRequeridos = ['velocidadInicialDF', 'aceleracionDF', 'tiempoDF'];
        } else if (tipo === 'tiempo') {
            inputsRequeridos = ['distanciaT', 'velocidadInicialT', 'aceleracionT'];
        } else if (tipo === 'velocidadInicial') {
            inputsRequeridos = ['velocidadFinalVI', 'aceleracionVI', 'tiempoVI'];
        } else if (tipo === 'distanciaInicial') {
            inputsRequeridos = ['distanciaFinalDI', 'velocidadInicialDI', 'aceleracionDI', 'tiempoDI'];
        }

        // Verificar que todos los inputs requeridos estén completos
        return inputsRequeridos.every(id => {
            const input = document.getElementById(id);
            return input.value.trim() !== ''; // Asegurarse de que no estén vacíos
        });
    }
});
