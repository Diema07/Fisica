document.addEventListener('DOMContentLoaded', function() {
    // Eventos para los botones
    document.getElementById('calcularSuma').addEventListener('click', calcularSumaVectores);
    document.getElementById('convertirCartesianas').addEventListener('click', convertirACartesianas);
    document.getElementById('convertirPolar').addEventListener('click', convertirAPolar);

    // Función para calcular la suma de vectores
    function calcularSumaVectores() {
        const x1 = parseFloat(document.getElementById('x1').value);
        const y1 = parseFloat(document.getElementById('y1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const y2 = parseFloat(document.getElementById('y2').value);

        const xR = x1 + x2;
        const yR = y1 + y2;

        const magnitudR = Math.sqrt(xR * xR + yR * yR);
        const anguloR = Math.atan2(yR, xR) * (180 / Math.PI); // Convertir a grados

        // Mostrar el resultado de la suma debajo de su formulario
        document.getElementById('resultadoSuma').innerText = 
            `Vector resultante: X = ${xR.toFixed(2)}, Y = ${yR.toFixed(2)}, 
            Magnitud = ${magnitudR.toFixed(2)}, Ángulo = ${anguloR.toFixed(2)}°`;
    }

    // Función para convertir de polar a cartesianas
    function convertirACartesianas() {
        const r = parseFloat(document.getElementById('r').value);
        const angulo = parseFloat(document.getElementById('angulo').value) * (Math.PI / 180); // Convertir a radianes

        const x = r * Math.cos(angulo);
        const y = r * Math.sin(angulo);

        // Mostrar el resultado de la conversión debajo de su formulario
        document.getElementById('resultadoConversion').innerText = 
            `Coordenadas cartesianas: X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
    }

    // Función para convertir de cartesianas a polar
    function convertirAPolar() {
        const x = parseFloat(document.getElementById('x').value);
        const y = parseFloat(document.getElementById('y').value);

        const r = Math.sqrt(x * x + y * y);  // Magnitud
        const angulo = Math.atan2(y, x) * (180 / Math.PI); // Ángulo en grados

        // Mostrar el resultado de la conversión debajo de su formulario
        document.getElementById('resultadoConversionPolar').innerText = 
            `Coordenadas polares: Magnitud = ${r.toFixed(2)}, Ángulo = ${angulo.toFixed(2)}°`;
    }
});
