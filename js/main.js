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

function cargarDiasSemana(cantidadDias) {
    const diasElegidos = [];

    for (let i = 0; i < cantidadDias; i++) {
        let dia = prompt(
            `Ingresá el día ${i + 1} en que vas a entrenar:`
        );
        dia = dia.toLowerCase();
        while (!dia || diasElegidos.includes(dia)) {
            dia = prompt(
                "Día inválido o repetido. Ingresá otro día:"
            );
            dia = dia.toLowerCase();
        }
        diasElegidos.push(dia);
    }
    return diasElegidos;
}
let diasIngresados = pedirDiasEntrenamiento();
let mensajeResultado = evaluarDias(diasIngresados);
mostrarMensaje(mensajeResultado);
let diasSemana = cargarDiasSemana(diasIngresados);

console.log("Tus días de entrenamiento son:");

for (const dia of diasSemana) {
    console.log(dia);
}

let nuevoDia = prompt(
    "Ingresá un día extra para agregar al principio de la lista:"
);

nuevoDia = nuevoDia.toLowerCase();

if (!diasSemana.includes(nuevoDia)) {
    diasSemana.unshift(nuevoDia);
} else {
    console.log("Ese día ya estaba en la lista.");
}

let diaEliminar = prompt(
    "Ingresá un día que quieras eliminar:"
);

diaEliminar = diaEliminar.toLowerCase();
let posicion = diasSemana.indexOf(diaEliminar);
if (posicion !== -1) {
    diasSemana.splice(posicion, 1);
    console.log(`Se eliminó ${diaEliminar}`);
} else {
    console.log("Ese día no estaba en la lista.");
}

let eliminarPrimero = prompt(
    "¿Querés eliminar el primer día de la lista? si/no"
);
if (eliminarPrimero === "si") {
    diasSemana.shift();
}
console.log("Lista final de días:");

for (const dia of diasSemana) {
    console.log(dia);
}