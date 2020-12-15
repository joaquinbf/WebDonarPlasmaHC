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
    cuestionario.forEach((pregunta) => {
      switch (pregunta.tipo_respuesta) {
        case 'bin':
          this.preguntas.push(
            new PreguntaSiNo(
              pregunta.pregunta,
              pregunta.justificacion_ante_respuesta_invalida,
              pregunta.validar_respuesta
            )
          );
          break;
        case 'num':
          this.preguntas.push(
            new PreguntaNumerica(
              pregunta.pregunta,
              pregunta.justificacion_ante_respuesta_invalida,
              pregunta.validar_respuesta
            )
          );
          break;
        case 'bin-encadenada':
          this.preguntas.push(
            new PreguntaEncadenada(
              pregunta.pregunta,
              pregunta.validar_respuesta,
              pregunta.preguntas,
              this
            )
          );
      }
    });

    this.pregunta = this.preguntas.shift();
    this.pregunta.preguntar();

    /*binding methods */
    this.evaluarRespuesta = this.evaluarRespuesta.bind(this);
    this.agregarPreguntas = this.agregarPreguntas.bind(this);
    this.preguntar = this.preguntar.bind(this);
  }

  evaluarRespuesta() {
    const respuestaCorrecta = this.pregunta.checkRespuesta();
    if (respuestaCorrecta) {
      if (this.preguntas.length > 0) {
        this.preguntar();
      } else {
        window.location.href = '/donador/agregar';
      }
    } else {
      this.pregunta.justificar();
    }
  }

  agregarPreguntas(preguntas) {
    this.preguntas.unshift.apply(this.preguntas, preguntas);
  }

  preguntar() {
    this.pregunta = this.preguntas.shift();
    this.pregunta.preguntar();
  }
}

class Pregunta {
  constructor(pregunta, justificacion, check) {
    this.pregunta = pregunta;
    this.justificacion = justificacion;
    this.check = check;
  }

  preguntar() {
    const nodoPregunta = document.getElementById('pregunta');
    const nodoEnviar = document.getElementById('enviar');
    nodoPregunta.innerText = this.pregunta;
    nodoEnviar.href = `#${this.pregunta}`;
  }

  justificar() {
    const entrevistaNodo = document.getElementById('container-entrevista');
    entrevistaNodo.innerHTML = `<div class="alert alert-danger alert-dismissible fade show"role="alert">${this.justificacion}</div>`;
  }

  checkRespuesta() {}
}

class PreguntaSiNo extends Pregunta {
  constructor(pregunta, justificacion, check) {
    super(pregunta, justificacion, check);
  }

  preguntar() {
    super.preguntar();
    const nodoRespuesta = document.getElementById('respuesta');
    nodoRespuesta.innerHTML = code_pregunta.bin;
  }

  checkRespuesta() {
    const respuesta = document.getElementById('opcion-bin').value.toLowerCase();
    return this.check(respuesta);
  }
}

class PreguntaNumerica extends Pregunta {
  constructor(pregunta, justificacion, check) {
    super(pregunta, justificacion, check);
  }

  preguntar() {
    super.preguntar();
    const nodoRespuesta = document.getElementById('respuesta');
    nodoRespuesta.innerHTML = code_pregunta.num;
  }

  checkRespuesta() {
    const respuesta = parseInt(document.getElementById('numero').value);
    return this.check(respuesta);
  }
}

class PreguntaEncadenada extends Pregunta {
  constructor(pregunta, check, preguntas, entrevista) {
    super(pregunta, null, check);

    this.entrevista = entrevista;
    this.preguntas = preguntas;
  }

  preguntar() {
    super.preguntar();
    const nodoRespuesta = document.getElementById('respuesta');
    nodoRespuesta.innerHTML = code_pregunta.bin;
  }

  checkRespuesta() {
    const respuesta = document.getElementById('opcion-bin').value.toLowerCase();
    const agregarPreguntas = this.check(respuesta) === false;
    if (agregarPreguntas) {
      const preguntasAAgregar = [];
      this.preguntas.forEach((pregunta) => {
        switch (pregunta.tipo_respuesta) {
          case 'bin':
            preguntasAAgregar.push(
              new PreguntaSiNo(
                pregunta.pregunta,
                pregunta.justificacion_ante_respuesta_invalida,
                pregunta.validar_respuesta
              )
            );
            break;
          case 'num':
            preguntasAAgregar.push(
              new PreguntaNumerica(
                pregunta.pregunta,
                pregunta.justificacion_ante_respuesta_invalida,
                pregunta.validar_respuesta
              )
            );
            break;
          case 'bin-encadenada':
            preguntasAAgregar.push(
              new PreguntaEncadenada(
                pregunta.pregunta,
                pregunta.validar_respuesta,
                pregunta.preguntas,
                this
              )
            );
        }
      });
      this.entrevista.agregarPreguntas(preguntasAAgregar);
      return true;
    } else {
      return this.check(respuesta);
    }
  }
}

const entrevista = new Entrevista();
window.addEventListener('hashchange', entrevista.evaluarRespuesta);
