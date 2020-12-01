const cuestionario = [
  {
    pregunta: "¿Ha donado sangre en las últimas 8 semanas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "El lapso de tiempo necesario entre donaciones tiene que ser de al menos 8 semanas",
    validar_respuesta: function (respuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Debe realizar alguna actividad laboral o deportiva de riesgo (trabajo en altura,escalada, etc.) o conducir un vehículo de transporte público?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Luego de la donación no puede someterse a ese tipo de actividad por riesgo de lipotimia o sincope post donación. Caso contrario, no podrá donar ya que puede ser causa de accidente",
    validar_respuesta: function (respuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "Cual es tu edad?",
    tipo_respuesta: "num",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, la edad minima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
    validar_respuesta: function (edad) {
      return edad > 18;
    },
  },
  {
    pregunta: "Cual es tu peso?",
    tipo_respuesta: "num",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud, el peso minimo es de 50kg",
    validar_respuesta: function (peso) {
      return peso > 50;
    },
  },
  {
    pregunta:
      "¿Lo han rechazado como donante de sangre o le dijeron que no puede donar",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud, ....",
    validar_respuesta: function (respuesta) {
      return true;
    },
  },
  {
    pregunta: "Sufrió algún inconveniente con posterioridad a la donación?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Se siente bien y “sano” hoy?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud, se tiene que sentir bien",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },

  {
    pregunta: "¿Tomó Danazol en los últimos 7 días? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Ácido Valproico en los últimos 20 días? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Finasterida y/o Isotretinoína en los últimos 1 mes? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta:
      "¿Tomó Etosumixida, Warfarina y/o Fenitoina los ultimos dos meses?  ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Penicilamina en los últimos cuatro meses?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta:
      "¿Tomó Fenobarbital, Primidona, Fenprocumon y/o Dutasterida los últimos seis meses? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Tamoxifeno en los últimos 18 meses?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Sales de Oro en los últimos 2 años? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Acitretina en los últimos 3 años?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Ha tomado aspirinas o analgésicos?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó medicación para el Acné?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, no podrá donar si consume/consumió las siguientes medicaciones: -Desde la última dosis de Isotretinoina (Roacutan), exclusión por un (1) mes. -Tratamiento con Acitretina (NeoTigasón), exclusión por tres (3) años",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó medicación para la Soriasis?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó medicación para la próstata?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Accutane?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Proscar?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó Tengison?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Tomó algun medicamento similar)?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Ha recibido tratamiento contra la Rabia?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Ha recibido Inmunoglobulina híper-inmune anti-hepatitis B?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Ha recibido vacunas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (respuesta) {
      return respuesta === "si";
    },
  },
  /* preguntas que quedan por analizar
    {
       pregunta: '¿Que vacunas? ',
       tipo_respuesta: 'bin',
       justificacion_ante_respuesta_invalida: 'NO SE SABE',
       validar_respuesta: function (respuesta) {return true}
    },
    {
       pregunta: '¿Cuándo se aplico?',
       tipo_respuesta: 'bin',
       justificacion_ante_respuesta_invalida: 'NO SE SABE',
       validar_respuesta: function (respuesta) {return true}
    },
		*/
  {
    pregunta:
      "Ha recibido tratamiento con hormonas de crecimiento o hipofisarias o trasplante de órganos o tejidos?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud, ....",
    validar_respuesta: function (respuesta) {
      return true;
    },
  },
  {
    pregunta:
      " ¿Ha padecido alguna enfermedad grave que exigió control médico periódico?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta:
      "¿Ha padecido o padece enfermedades del corazón (infarto, angina de pecho, etc.)?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido enfermedad en los pulmones, tuberculosis o asma bronquial?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Está medicado?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta:
      " ¿Ha tenido convulsiones, desmayos, ausencias o pérdidas de conocimiento?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Padeció alguna vez de epilepsia?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Está medicado?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: " ¿Tiene antecedentes de hipertensión arterial?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: " ¿Alguna vez le diagnosticaron cáncer?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: " ¿Cuál? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Recibió quimioterapia y/o radiaciones? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: " ¿Se realizó alguna vez una prueba para VIH? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: "  ¿Le han dicho que tiene análisis positivos para HIV-SIDA?  ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,... ",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ictericia, color amarillo de piel, hepatitis o pruebas positivas para Hepatitis o enfermedad del hígado? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,... ",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      " ¿Le han dicho que tiene análisis positivos para HTLV, Chagas, Sífilis, Brucelosis? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,... ",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      " ¿Ha tenido fatiga, sudoración nocturna o pérdida de peso inexplicable?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: " ¿Ha tenido ganglios, lesiones en la piel o mucosas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Presenta o presentó alguna enfermedad no mencionada? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: " ¿Cuál? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Padece diabetes y además es tratada con insulina?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: " ¿Ha recibido transfusiones de sangre?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: " ¿Cuándo?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta:
      "¿Ha tenido Malaria o Paludismo, en los últimos 3 años y recibió tratamiento, o en el último año viajó a zonas endémicas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ud.o un familiar sufre o ha sufrido Enfermedad de Creutzfeld-Jacob? O vivo entre 1980-1996en el Reino Unido?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Está embarazada?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: " ¿Está amamantando? ",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido en el último año parto-aborto-cesárea?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Usó alguna droga ilegal inyectable, aunque sea una sola vez?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Aspiró Cocaína?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente, por cuestiones de salud,...",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido contacto sexual con alguien que haya estado expuesto al virus del VIH o queesté infectado con el virus del VIH, Hepatitis B o C?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha sido tratado por sífilis",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha sido tratado por gonorrea ?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha sido tratado por enfermedad venérea?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Se ha realizado tatuajes?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Se ha realizado  perforaciones en orejas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Se ha realizado perforaciones en en la piel?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Se ha realizado tratamiento con acupuntura?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido contacto accidental con sangre humana?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta:
      "¿Ha tenido contacto accidental con secreciones o realiza tareas que loexponen a las mismas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha realiza tareas que loexponen a las mismas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Le han realizado algún procedimiento de cirugía mayor?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Le han realizado algún procedimiento de cirugía  menor?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Le han realizado algún (implante)?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Le han realizado algúna laparoscopia?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Le han realizado algún endoscopia?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Ha tenido contacto sexual con una persona en plan de diálisis",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido contacto sexual con personas que reciben frecuentes transfusiones de sangre?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido contacto sexual con personas que reciben frecuentes transfusiones de componentes sanguíneos?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Ha estado detenido en instituciones carcelarias?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha estado detenido en instituciones policiales por más de 72 horas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido relaciones sexuales de riesgo aunque sea una sola vez con distintas  mujeres/hombres?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta:
      "¿Ha tenido relaciones sexuales con varias parejas (hombres / mujeres)?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido relaciones sexuales con drogadictos/as?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido relaciones sexuales con drogadictos/as?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Ha tenido sexo por dinero ?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido sexo por drogas?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha sufrido abuso sexual?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha recibido tratamiento odontológico?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },
  {
    pregunta: "¿Ha tenido diarrea?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Ha tenido fiebre?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "si";
    },
  },
  {
    pregunta: "¿Está donando para que le hagan la prueba del VIH?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return true;
    },
  },
  {
    pregunta: "¿Recibió dinero o algún tipo de compensación para donar?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida:
      "Lamentablemente no podrá donar sangre porque la compra o venta de sangre constituye un delito federal",
    validar_respuesta: function (repuesta) {
      return respuesta === "no";
    },
  },

  {
    pregunta: "¿Entendió todas las preguntas que se le formularon?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "si";
    },
  },
	  {
    pregunta: "¿Es esta una pregunta encadenada?",
    tipo_respuesta: "bin",
    validar_respuesta: function (respuesta) {
      return respuesta === "no";
    },
		preguntas: [
			  {
    pregunta: "¿Esta es una sub pregunta?",
    tipo_respuesta: "bin",
    justificacion_ante_respuesta_invalida: "NO SE SABE",
    validar_respuesta: function (repuesta) {
      return respuesta === "si";
    },
  },
		]
  },
];
