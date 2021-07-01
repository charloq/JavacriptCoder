function procesarTexto() {
  let palabra = prompt("Ingrese una palabra para procesar:");
  let opcion = parseInt(
    prompt("Elija una opción\n1. Mayusculas\n2. Minusculas\n3. CamelCase")
  );
  if (opcion == 1) {
    textoALetrasMayusculas(palabra);
  } else if (opcion == 2) {
    textoALetrasMinusculas(palabra);
  } else {
    textoACamelCase(palabra);
  }
}

function textoALetrasMayusculas(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado = resultado + texto[i].toUpperCase() + " ";
  }
  alert(resultado);
}

function textoALetrasMinusculas(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado = resultado + texto[i].toLowerCase() + " ";
  }
  alert(resultado);
}

function textoACamelCase(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (i % 2 == 0) {
      resultado = resultado + texto[i].toUpperCase() + " ";
    } else {
      resultado = resultado + texto[i].toLowerCase() + " ";
    }
  }
  alert(resultado);
}

procesarTexto();