function mostrar()
{

	let origen;
	let cantidadVacunas;
	let costoVuelo;
	let flagMenorCantidadVacunas = 1;
	let origenMenorCantidadVacunas;
	let menorCantidadVacunas;
	let contadorVuelosOccidente = 0;
	let acumuladoraCantidadVacunasOccidente = 0;
	let promedioVacunasOccidente;
	let totalBruto = 0;
	let cantidadTotalVacunas = 0;
	let descuento;
	let precioConDescuento;
	let respuesta;

	do {
		origen = prompt("¿De dónde vienen las vacunas? (Oriente, Occidente, Secreto)");
		while (origen != "Oriente" && origen != "Occidente" && origen != "Secreto") {
			origen = prompt("Error. ¿De dónde vienen las vacunas? (Oriente, Occidente, Secreto)");
		}

		cantidadVacunas = parseInt(prompt("¿Cuántas vacunas trajeron (entre 500000 y 2500000)?"));
		while (isNaN(cantidadVacunas) || (cantidadVacunas > 2500000 || cantidadVacunas < 500000)) {
			cantidadVacunas = parseInt(prompt("Error. ¿Cuántas vacunas trajeron (entre 500000 y 2500000)?"));
		}

		costoVuelo = parseInt(prompt("¿Cuánto costo el vuelo (entre 1 millón y 5 millones de pesos)?"));
		while (isNaN(costoVuelo) || (costoVuelo > 5000000 || costoVuelo < 1000000)) {
			costoVuelo = parseInt(prompt("Error. ¿Cuánto costo el vuelo (entre 1 millón y 5 millones de pesos)?"));
		}

		if (flagMenorCantidadVacunas || cantidadVacunas < menorCantidadVacunas) {
			flagMenorCantidadVacunas = 0;
			menorCantidadVacunas = cantidadVacunas;
			origenMenorCantidadVacunas = origen;
		}
		
		if (origen == "Occidente") {
			contadorVuelosOccidente++;
			acumuladoraCantidadVacunasOccidente = acumuladoraCantidadVacunasOccidente + cantidadVacunas;
		}
		

		totalBruto = parseInt(totalBruto + costoVuelo);
		cantidadTotalVacunas = cantidadTotalVacunas + cantidadVacunas

		respuesta = prompt("¿Desea seguir ingresando vacunados? (si o no): ");
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error. ¿Desea seguir ingresando vacunados? (si o no): ");
		}
		
	} while (respuesta == "si");

	console.log("El origen que envio menor cantidad de vacunas fue: " + origenMenorCantidadVacunas);

	promedioVacunasOccidente = acumuladoraCantidadVacunasOccidente / contadorVuelosOccidente;
	console.log(" El promedio por vuelo de vacunas llegadas de Occidente es de: " + promedioVacunasOccidente);

	console.log("El total sin descuentos a pagar por los gastos de los viajes es: $" + totalBruto);

	if (cantidadTotalVacunas >= 1000000) {
		descuento = 0.25;
		precioConDescuento = totalBruto * descuento;
	} else if (cantidadTotalVacunas >= 5000000) {
		descuento = 0.15;
		precioConDescuento = totalBruto * descuento;
	}

	console.log("Aplicando el descuento correspondiente, su total a pagar es: $" + precioConDescuento);

}

