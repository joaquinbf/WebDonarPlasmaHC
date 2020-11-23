function mensaje_respuesta_invalida(mensaje) {
  const container = document.getElementById("container-entrevista");
  container.innerHTML = `<p class="mensaje-respuesta"> ${mensaje} </p>`;
}
function mensaje_alerta(mensaje) {
  const mensajeHTML = document.createElement("p");
  mensajeHTML.className += "mensaje-alerta";
  mensajeHTML.innerText = mensaje;
  const container = document.getElementById("container-entrevista");
  container.appendChild(mensajeHTML);
}

function siguiente_pregunta(id_pregunta_vieja) {
  const id_pregunta = id_pregunta_vieja + 1;

  if (id_pregunta >= cuestionario.length) {
    window.location.href = "/formulario_contacto_donador";
  } else {
    const respuesta = document.getElementById("respuesta");
    const pregunta = document.getElementById("pregunta");
    const enviar = document.getElementById("enviar");
    enviar.href = `#${id_pregunta}`;
    pregunta.innerText = cuestionario[id_pregunta].pregunta;
    respuesta.innerHTML =
      code_pregunta[cuestionario[id_pregunta].tipo_respuesta];
  }
}

function evaluar_respuesta_bin(pregunta, id_pregunta) {
  const respuesta = document.getElementById("opcion-bin").value.toLowerCase();
  if (pregunta.validar_respuesta(respuesta)) {
    siguiente_pregunta(id_pregunta);
  } else {
    mensaje_respuesta_invalida(pregunta.justificacion_ante_respuesta_invalida);
  }
}
function evaluar_respuesta_num(pregunta, id_pregunta) {
  const respuesta = parseInt(document.getElementById("numero").value);
  if (pregunta.validar_respuesta(respuesta)) {
    siguiente_pregunta(id_pregunta);
  } else {
    mensaje_respuesta_invalida(pregunta.justificacion_ante_respuesta_invalida);
  }
}

const evaluar_respuesta_tipo = {
  bin: evaluar_respuesta_bin,
  num: evaluar_respuesta_num,
};

function cargar_pregunta() {
  const respuesta = document.getElementById("respuesta");
  const pregunta = document.getElementById("pregunta");
  pregunta.innerText = cuestionario[0].pregunta;
  respuesta.innerHTML = code_pregunta[cuestionario[0].tipo_respuesta];
}

function evaluar_respuesta() {
  const id_pregunta = parseInt(location.hash.split("#")[1]);
  const pregunta = cuestionario[id_pregunta];
  const evaluacion = evaluar_respuesta_tipo[pregunta.tipo_respuesta];
  evaluacion(pregunta, id_pregunta);
}

window.addEventListener("load", cargar_pregunta);
window.addEventListener("hashchange", evaluar_respuesta);
