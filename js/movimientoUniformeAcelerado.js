document.addEventListener('DOMContentLoaded', function() {
    // Ocultar secciones según la selección
    hideAllInputs();

    document.getElementById('tipoCalculo').addEventListener('change', mostrarInputs);
    document.getElementById('calcularBoton').addEventListener('click', calcular);

    function hideAllInputs() {
        const inputGroups = ['calcularVelocidadFinal', 'calcularDistanciaFinal', 'calcularTiempo', 'calcularAceleracion', 'calcularVelocidadInicial', 'calcularDistanciaInicial'];
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
        } else if (tipo === 'aceleracion') {
            document.getElementById('calcularAceleracion').style.display = 'block';
        } else if (tipo === 'velocidadInicial') {
            document.getElementById('calcularVelocidadInicial').style.display = 'block';
        } else if (tipo === 'distanciaInicial') {
            document.getElementById('calcularDistanciaInicial').style.display = 'block';
        }
        document.getElementById('calcularBoton').style.display = 'block';

        
    }

    function calcular() {
        const tipo = document.getElementById('tipoCalculo').value;
        document.getElementById('resultado').innerText = ''; // Limpiar el resultado anterior

        let isValid = true; // Variable para verificar si todos los campos son válidos

        if (tipo === 'velocidadFinal') {
            const V_i = document.getElementById('velocidadInicialVF').value;
            const a = document.getElementById('aceleracionVF').value;
            const t = document.getElementById('tiempoVF').value;

            if (V_i === '' || a === '' || t === '') {
                document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
                isValid = false;
            }

            if (isValid) {
                // Conversión de unidades y cálculo
                // (Incluye aquí tu lógica de cálculo como antes)
                // Ejemplo de cálculo:
                let V_final = parseFloat(V_i) + parseFloat(a) * parseFloat(t);
                document.getElementById('resultado').innerText = 'La velocidad final es: ' + V_final.toFixed(2) + ' m/s';
            }
            
        } else if (tipo === 'distanciaFinal') {
            const X_i = document.getElementById('distanciaInicialDF').value;
            const V_i = document.getElementById('velocidadInicialDF').value;
            const V_f = document.getElementById('velocidadFinalDF').value;
            const t = document.getElementById('tiempoDF').value;

            if (X_i === '' || V_i === '' || V_f === '' || t === '') {
                document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
                isValid = false;
            }

            if (isValid) {
                // Conversión de unidades y cálculo
                // Ejemplo de cálculo:
                let distancia_final = parseFloat(X_i) + (0.5 * (parseFloat(V_i) + parseFloat(V_f))) * parseFloat(t);
                document.getElementById('resultado').innerText = 'La distancia final es: ' + distancia_final.toFixed(2) + ' m';
            }
            
        } else if (tipo === 'tiempo') {
            const X_f = document.getElementById('distanciaT').value;
            const V_i = document.getElementById('velocidadInicialT').value;
            const a = document.getElementById('aceleracionT').value;

            if (X_f === '' || V_i === '' || a === '') {
                document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
                isValid = false;
            }

            if (isValid) {
                // Conversión de unidades y cálculo
                // Ejemplo de cálculo:
                let tiempo = (parseFloat(X_f) - parseFloat(V_i)) / parseFloat(a);
                document.getElementById('resultado').innerText = 'El tiempo es: ' + tiempo.toFixed(2) + ' s';
            }
            
        } else if (tipo === 'aceleracion') {
            const X_f = document.getElementById('distanciaA').value;
            const V_i = document.getElementById('velocidadInicialA').value;
            const V_f = document.getElementById('velocidadFinalA').value;
            const t = document.getElementById('tiempoA').value;

            if (X_f === '' || V_i === '' || V_f === '' || t === '') {
                document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
                isValid = false;
            }

            if (isValid) {
                // Conversión de unidades y cálculo
                // Ejemplo de cálculo:
                let aceleracion = (parseFloat(V_f) - parseFloat(V_i)) / parseFloat(t);
                document.getElementById('resultado').innerText = 'La aceleración es: ' + aceleracion.toFixed(2) + ' m/s²';
            }
            
        } else if (tipo === 'velocidadInicial') {
            const X_i = document.getElementById('distanciaInicialVI').value;
            const a = document.getElementById('aceleracionVI').value;
            const t = document.getElementById('tiempoVI').value;
            const V_f = document.getElementById('velocidadFinalVI').value;

            if (X_i === '' || a === '' || t === '' || V_f === '') {
                document.getElementById('resultado').innerText = 'Por favor, completa todos los campos requeridos.';
                isValid = false;
            }

            if (isValid) {
                // Conversión de unidades y cálculo
                // Ejemplo de cálculo:
                let V_i = parseFloat(V_f) - parseFloat(a) * parseFloat(t);
                document.getElementById('resultado').innerText = 'La velocidad inicial es: ' + V_i.toFixed(2) + ' m/s';
            }
        }
    }
});
