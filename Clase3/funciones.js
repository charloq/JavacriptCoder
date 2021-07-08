alert("El script devolvera los valores pares entre 2 números pasados por parametro");
let inicial = parseInt(prompt("Ingresá el valor inicial"));
let final = parseInt(prompt("Ingresá el valor final"));

let valores = ""
for (let i = inicial; i <= final; i++) {
    if (i % 2 == 0) {
        valores += i + " "
    }
}
alert(valores) 