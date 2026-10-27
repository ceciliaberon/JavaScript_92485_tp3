function pedirDiasEntrenamiento() {
  let dias = parseInt(prompt("¿Cuántos días a la semana vas a entrenar?"));
  while (isNaN(dias) || dias < 0 || dias > 7) {
    dias = parseInt(prompt("Por favor, ingresá un número válido entre 0 y 7:"));
  }
  return dias;
}

const evaluarDias = (cantidadDias) => {
  if (cantidadDias < 3) {
    return "Te recomiendo como mínimo 3 días.";
  } else {
    return "Está perfecto, no olvides comer bien.";
  }
};

function mostrarMensaje(mensaje) {
  alert(mensaje);
  console.log(`Resultado del simulador: ${mensaje}`);
}

let diasIngresados = pedirDiasEntrenamiento();
let mensajeResultado = evaluarDias(diasIngresados);
mostrarMensaje(mensajeResultado);
