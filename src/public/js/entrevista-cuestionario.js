

const cuestionario = [
	{
		pregunta: "¿Cual es tu edad?",
		tipo_respuesta: "num",
		justificacion_ante_respuesta_invalida: "Lamentablemente, la edad minima para donar es mayor a 18 excepto que tenga entre 16 y 18, deberá tener una autorización escrita del responsable legal",
		validar_respuesta: function(edad) {
			return edad > 17;
		},
	},
	{
		pregunta: "¿Cual es tu peso?",
		tipo_respuesta: "num",
		justificacion_ante_respuesta_invalida: "Lamentablemente, por cuestiones de salud, el peso minimo es de 50kg",
		validar_respuesta: function(peso) {
			return peso > 50;
		},
	},
	{
		pregunta: "¿Ha donado sangre en las últimas 8 semanas?",
		tipo_respuesta: "bin",
		justificacion_ante_respuesta_invalida:
			"El lapso de tiempo necesario entre donaciones tiene que ser de al menos 8 semanas",
		validar_respuesta: function(respuesta) {
			return respuesta === "no";
		},
	},
	{
		pregunta:
			"¿Debe realizar alguna actividad laboral o deportiva de riesgo (trabajo en altura,escalada, etc.) o conducir un vehículo de transporte público?",
		tipo_respuesta: "bin",
		justificacion_ante_respuesta_invalida:
			"Luego de la donación no puede someterse a ese tipo de actividad por riesgo de lipotimia o sincope post donación. Caso contrario, no podrá donar ya que puede ser causa de accidente",
		validar_respuesta: function(respuesta) {
			return respuesta === "no";
		},
	},
	{
		pregunta: "¿Está tomando alguna medicación?",
		tipo_respuesta: "bin-encadenada",
		validar_respuesta: function(respuesta) {
			return respuesta === "no";
		},
		preguntas: [
			{
				pregunta: "¿Tomó Danazol en los últimos 7 días? ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Ácido Valproico en los últimos 20 días? ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Finasterida y/o Isotretinoína en el ultimo mes? ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta:
					"¿Tomó Etosumixida, Warfarina y/o Fenitoina los ultimos dos meses?  ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Penicilamina en los últimos cuatro meses?",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta:
					"¿Tomó Fenobarbital, Primidona, Fenprocumon y/o Dutasterida los últimos seis meses? ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Tamoxifeno en los últimos 18 meses?",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Sales de Oro en los últimos 2 años? ",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
			{
				pregunta: "¿Tomó Acitretina en los últimos 3 años?",
				tipo_respuesta: "bin",
				justificacion_ante_respuesta_invalida:
					"Los que tienen propiedades teratogenas o que alteran la función plaquetar en el caso de la donación de plaquetas por aferesis deben ser excluidos  temporalmente durante un periodo de tiempo que estará en función de las propiedades farmaco-cinéticas del medicamento",
				validar_respuesta: function(respuesta) {
					return respuesta === "no";
				},
			},
		]
	},

	{
		pregunta: "¿Tomó medicación para el Acné?",
		tipo_respuesta: "bin",
		justificacion_ante_respuesta_invalida:
			"Lamentablemente, no podrá donar si consume/consumió las siguientes medicaciones: -Desde la última dosis de Isotretinoina (Roacutan), exclusión por un (1) mes. -Tratamiento con Acitretina (NeoTigasón), exclusión por tres (3) años",
		validar_respuesta: function(respuesta) {
			return respuesta === "no";
		},
	},
];
