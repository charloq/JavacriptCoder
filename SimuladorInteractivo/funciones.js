function calcularTotal() {
  let opcion = parseInt(prompt("Desea cargar un producto?\n1. Si\n2. No"));
  let productos = [];
  let precioTotal = 0;
  while (opcion == 1) {
    agregarProductoNuevo(productos);
    opcion = parseInt(prompt("Desea cargar un producto?\n1. Si\n2. No"));
  }
  productos.forEach((prod) => {
    precioTotal += prod.precio;
  });
  alert("El precio total del carrito es " + precioTotal);
}

function agregarProductoNuevo(productos) {
    let descripcion = prompt("Descripción:");
    let precio = parseFloat(prompt("Precio:"));
    let p = new Producto(descripcion, precio);
    productos.push(p);
}

function Producto(descripcion, precio) {
  this.descripcion = descripcion;
  this.precio = precio;
}

