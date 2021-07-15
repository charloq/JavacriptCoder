class ProductoCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}

function agregarAlCarrito(carrito, prod) {
  refrescarCarrito();
  if (carrito.length == 0) {
    carrito.push(new ProductoCarrito(prod, 1));
  } else {
    const prodCarrito = carrito.find((p) => p.producto.id == prod.id);
    if (prodCarrito != null) {
      prodCarrito.cantidad += 1;
    } else {
      carrito.push(new ProductoCarrito(prod, 1));
    }
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

let carrito = [];

function refrescarCarrito() {
  const carritoLocal = JSON.parse(localStorage.getItem("carrito"));
  const carritoCopia = [];

  carritoLocal.forEach((pl) => {
    carritoCopia.push(new ProductoCarrito(pl.producto, pl.cantidad));
  });
  carrito = carritoCopia;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function limpiarCarrito(e) {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
