// Saber el valor de la matricula 2025B

const handleClickMiBoton = (e, inputValor, errorMessage, parrafoPrincipal) => {
    e.preventDefault();
    if (inputValor.value === '') {
        errorMessage.textContent = 'Por favor, escribe algo en el input';
        errorMessage.style.display = 'block';
        return;
    }
    parrafoPrincipal.textContent = inputValor.value + ' su matrícula es de 700€';
};


const handleInputMiInput = (errorMessage) => {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
};

function initializeDOMManipulation() {
    // Variable Declarations
    const parrafoPrincipal = document.getElementById('parrafo-principal');
    const miBoton = document.querySelector('#mi-boton');
    const miInput = document.querySelector('#input-valor');
    const errorMessage = document.querySelector('#error-message');

    

    parrafoPrincipal.classList.add('resaltado');

    // Event Listeners
    miBoton.addEventListener('click', (e) => handleClickMiBoton(e, miInput, errorMessage, parrafoPrincipal));

    miInput.addEventListener('input', () => handleInputMiInput(errorMessage));

}

document.addEventListener('DOMContentLoaded', initializeDOMManipulation);




document.getElementById("calcular").addEventListener("click", () => {
      const precioBase = parseFloat(document.getElementById("precioBase").value);
      const edad = parseInt(document.getElementById("edad").value);

      if (isNaN(precioBase) || isNaN(edad)) {
        document.getElementById("resultado").textContent =
          "Ingresa valores válidos en ambos campos.";
        return;
      }

      // Estructura de control de flujo: if...else
      let descuento = 0;

      if (edad <= 18) {
        // Si el estudiante es menor de edad, obtiene 25% de beca
        descuento = 25;
      } else {
        // Si NO es menor de edad, no hay beca
        descuento = 0;
      }

      const cantidadDescuento = precioBase * (descuento / 100);
      const precioFinal = precioBase - cantidadDescuento;

      // Mostrar resultado
      const mensaje = descuento > 0
        ? `El estudiante tiene ${descuento}% de beca. Total a pagar: €${precioFinal.toFixed(2)}`
        : `No aplica beca. Total a pagar: €${precioBase.toFixed(2)}`;

      document.getElementById("resultado").textContent = mensaje;
});




