
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let acumuladorChina = 0;
	let contadorChina = 0;
	let acumuladorAmericana = 0;
	let contadorAmericana = 0;
	let acumuladorAmericanaMenores = 0;
	let acumuladorRusa = 0;
	let contadorRusa = 0;
	let promedioDeEdadChina;
	let edadMinimo;
	let nombreMinimo;
	let vacunaMinimo;
	let sexoMinimo;
	let porcentajeAmericanaMenores;
	let porcentajePrimeraDosis;
	let vacunaInoculada;
	let respuesta;
	let FlagVacunadoMenor = 1;
	let contadorPrimeraDosis = 0;
	let contadorSegundaDosis = 0;
	let totalVacunados = 0;
	let contadorMenoresAmericanos = 0;

	do {

		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad por favor"));
		while (isNaN(edad) || edad < 11) {
			edad = parseInt(prompt("Esa edad no es válida. Ingrese su edad por favor"));
		}

		vacuna = prompt("Ingrese la vacuna que se le fue dada (rusa, china o americana)");
		while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
			vacuna = prompt("Esa vacuna no es válida. Ingrese la vacuna que se le fue dada (rusa, china o americana)");
		}

		dosis = prompt("“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis");
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Eror. “p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis");
		}

		sexo = prompt("Ingrese su sexo por favor (f o m)");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Eror. Ingrese su sexo por favor (f o m)");
		}

		switch (vacuna) {
			case "china":
				acumuladorChina = acumuladorChina + edad;
				contadorChina++;
				break;
			case "americana":
				acumuladorAmericana = acumuladorAmericana + edad;
				contadorAmericana++;
				if (edad < 18) {
					acumuladorAmericanaMenores = acumuladorAmericanaMenores + edad;
					contadorMenoresAmericanos++;
				}
				break;
			case "rusa":
				acumuladorRusa = acumuladorRusa + edad;
				contadorRusa++;
				break;
		}

		if (dosis == "p") {
			contadorPrimeraDosis++;
		} else if (dosis == "s") {
			contadorSegundaDosis++;
		}

		if (FlagVacunadoMenor || edad < edadMinimo) {
			FlagVacunadoMenor = 0;
			edadMinimo = edad;
			nombreMinimo = nombre;
			vacunaMinimo = vacuna;
			sexoMinimo = sexo;
		}

		respuesta = prompt("¿Desea seguir ingresando vacunados? (si o no): ");
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error. ¿Desea seguir ingresando vacunados? (si o no): ");
		}

	} while (respuesta == "si");
	

	promedioDeEdadChina = acumuladorChina / contadorChina;

	if (promedioDeEdadChina > 0) {
		console.log("El promedio de edad de los que se vacunaron con la vacuna China es de: " + promedioDeEdadChina);
	}

	console.log("La persona más joven en vacunarse es: " + nombreMinimo + " de edad: " + edadMinimo + " con la vacuna: " + vacunaMinimo + " y del sexo: " + sexoMinimo);

	porcentajeAmericanaMenores = contadorMenoresAmericanos * 100 / contadorAmericana;
	console.log("El porcentaje de los que se vacunaron con la americana y son menores, es del: " + porcentajeAmericanaMenores);

	totalVacunados = contadorPrimeraDosis + contadorSegundaDosis;
	porcentajePrimeraDosis = contadorPrimeraDosis * 100 / totalVacunados;
	(porcentajePrimeraDosis).toFixed(2);

	console.log("El porcentaje de personas vacunadas con primera dosis es del: " + porcentajePrimeraDosis);

	if (contadorAmericana > contadorChina && contadorAmericana > contadorRusa) {
		vacunaInoculada = "vacuna americana";
	} else if (contadorChina > contadorAmericana && contadorChina > contadorRusa) {
		vacunaInoculada = "vacuna china";
	} else {
		vacunaInoculada = "vacuna rusa"
	}

	console.log("La vacuna inoculada es la: " + vacunaInoculada);

}
