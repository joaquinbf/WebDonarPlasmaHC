const code_pregunta = {
  bin: `<select class="form-control" name="opcion-bin" id="opcion-bin">
    <option value="Si">Si</option>
    <option value="No">No</option>
    </select>`,
  num: `<input class="form-control" id= "numero" type="number" name="numero" min="0">`,
};

class Entrevista {
  constructor() {
    this.preguntas = [];
    for (let idPregunta = 0; idPregunta < cuestionario.length; idPregunta++) {
      const pregunta = cuestionario[idPregunta];
      switch (pregunta.tipo_respuesta) {
        case "bin":
          this.preguntas.push(
            new PreguntaSiNo(
              idPregunta,
              pregunta.pregunta,
              pregunta.justificacion_ante_respuesta_invalida,
              pregunta.validar_respuesta,
            )
          );
          break;
        case "num":
          this.preguntas.push(
            new PreguntaNumerica(
              idPregunta,
              pregunta.pregunta,
              pregunta.justificacion_ante_respuesta_invalida,
              pregunta.validar_respuesta
            )
          );
          break;
      }
    }

    this.preguntas[0].preguntar();

    /*binding methods */
    this.evaluarRespuesta = this.evaluarRespuesta.bind(this);
  }

  evaluarRespuesta() {
    const idPregunta = parseInt(location.hash.split("#")[1]);
    const respuestaCorrecta = this.preguntas[idPregunta].checkRespuesta();
    if (respuestaCorrecta) {
      if (idPregunta + 1 < this.preguntas.length) {
        this.preguntas[idPregunta + 1].preguntar();
      } else {
        window.location.href = "/donador/agregar";
      }
    } else {
      this.preguntas[idPregunta].justificar();
    }
  }
}

class Pregunta {
  constructor(idPregunta, pregunta, justificacion, check) {
    this.idPregunta = idPregunta;
    this.pregunta = pregunta;
    this.justificacion = justificacion;
    this.check = check;
  }

  preguntar() {
    const nodoPregunta = document.getElementById("pregunta");
    const nodoEnviar = document.getElementById("enviar");
    nodoPregunta.innerText = this.pregunta;
    nodoEnviar.href = `#${this.idPregunta}`;
  }

  justificar() {
    const entrevistaNodo = document.getElementById("container-entrevista");
    entrevistaNodo.innerHTML = `<div class="alert alert-danger alert-dismissible fade show"role="alert">${this.justificacion}</div>`;
  }

  checkRespuesta() {}
}

class PreguntaSiNo extends Pregunta {
  constructor(idPregunta, pregunta, justificacion, check) {
    super(idPregunta, pregunta, justificacion, check);
  }

  preguntar() {
    super.preguntar();
    const nodoRespuesta = document.getElementById("respuesta");
    nodoRespuesta.innerHTML = code_pregunta.bin;
  }

  checkRespuesta() {
    const respuesta = document.getElementById("opcion-bin").value.toLowerCase();
    return this.check(respuesta);
  }
}

class PreguntaNumerica extends Pregunta {
  constructor(idPregunta, pregunta, justificacion, check) {
    super(idPregunta, pregunta, justificacion, check);
  }

  preguntar() {
    super.preguntar();
    const nodoRespuesta = document.getElementById("respuesta");
    nodoRespuesta.innerHTML = code_pregunta.num;
  }

  checkRespuesta() {
    const respuesta = parseInt(document.getElementById("numero").value);
    return this.check(respuesta);
  }
}

class PreguntaEncadenada extends Pregunta{
  constructor(idPregunta, pregunta, justificacion, check) {
    super(idPregunta, pregunta, justificacion, check);
  }

  preguntar() {
    
  }

  checkRespuesta() {
  
  }
}

const entrevista = new Entrevista();
window.addEventListener("hashchange", entrevista.evaluarRespuesta);

