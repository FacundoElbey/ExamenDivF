function mostrar()
{

    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contadorPositivos = 0;
    let contadorNegativos = 0;
    let contadorTotal = 0;
    let porcentajePositivos;
    let porcentajeNegativos;
    let contadorAlfa = 0;
    let contadorBeta = 0;
    let contadorDelta = 0;
    let cepaMenosEncontrada;
    let flagArgentinoMenor = 1;
    let edadArgentinoMenorContagiado;
    let extranjerosDelta = 0;


    for (let i = 0; i < 8; i++){
        nacionalidad = prompt("Ingrese si su nacionalidad es argentina o es extranjero");
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("Eror en la validación. Ingrese si su nacionalidad es argentina o es extranjero");
        }
        
        resultado = prompt("Ingrese si el resultado de su hisopado es positivo o negativo");
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("Eror en la validación. Ingrese si el resultado de su hisopado es positivo o negativo");
        }

        if (resultado == "positivo") {
            cepa = prompt("Ingrese la cepa que tuvo delta, alfa, beta");
            while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
                cepa = prompt("Error en la validación. Ingrese la cepa que tuvo delta, alfa, beta");
            }
            contadorPositivos++;
        } else {
            cepa = "ninguna";
            contadorNegativos++;
        }

        edad = parseInt(prompt("Ingrese su edad entre 18 y 65"));
        while (isNaN(edad) || (edad > 65 || edad < 18)) {
            edad = parseInt(prompt("Error en la validación. Ingrese su edad entre 18 y 65"));
        }


        switch (cepa) {
            case "delta":
                contadorDelta++;
                break;
            case "alfa":
                contadorAlfa++;
                break;
            case "beta":
                contadorBeta++;
        }

        switch (nacionalidad) {
            case "argentina":
                if (resultado = "positivo") {
                    if (flagArgentinoMenor = 1 || edad < edadArgentinoMenorContagiado) {
                        flagArgentinoMenor = 0;
                        edadArgentinoMenorContagiado = edad;
                    }
                }
                break;
            case "extranjero":
                if (cepa = "delta") {
                    extranjerosDelta++;
                }
                break;
       }


    }

    contadorTotal = contadorPositivos + contadorNegativos;

    porcentajePositivos = contadorPositivos * 100 / contadorTotal;
    console.log("El porcentaje de positivos es de: " + porcentajePositivos);

    porcentajeNegativos = contadorNegativos * 100 / contadorTotal;
    console.log("El porcentaje de negativos es de: " + porcentajeNegativos);
    
    if (contadorDelta < contadorBeta && contadorDelta < contadorAlfa) {
        cepaMenosEncontrada = "delta";
    } else if (contadorBeta < contadorDelta && contadorBeta < contadorAlfa) {
        cepaMenosEncontrada = "beta";
    } else {
        cepaMenosEncontrada = "alfa";
    }

    console.log("La cepa menos encontrada es: " + cepaMenosEncontrada);

    console.log("La edad del argentino más chico contagiado es de: " + edadArgentinoMenorContagiado);

    console.log("Cantidad de extrangeros contagiados con la variable delta: " + extranjerosDelta);

}
