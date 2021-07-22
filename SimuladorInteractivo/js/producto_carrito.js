class ProductoCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}

/**
 * Agrega un producto al carrito
 * @param {ProductoCarrito[]} carrito
 * @param {Producto} prod
 */
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

/**
 * Refresca la variable carrito desde LocalStorage
 */
function refrescarCarrito() {
  const carritoLocal = JSON.parse(localStorage.getItem("carrito"));
  const carritoCopia = [];

  carritoLocal.forEach((pl) => {
    carritoCopia.push(new ProductoCarrito(pl.producto, pl.cantidad));
  });
  carrito = carritoCopia;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/**
 * Recarga el html del carrito con los productos en LocalStorage
 */
function recargarCarrito() {
  refrescarCarrito();
  let totalCompra = 0;
  let htmlProd = "";
  carrito.forEach((prodCarrito) => {
    let prod = prodCarrito.producto;
    totalCompra += prod.precio * prodCarrito.cantidad;
    htmlProd += `<li class="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 class="my-0">${prod.nombre}</h6>
                  <small class="text">Cantidad: ${prodCarrito.cantidad}</small>
                  </div>
                  <span class="text-warning">$ ${
                    prod.precio * prodCarrito.cantidad
                  }</span>
                </li>`;
  });

  htmlProd += `<li class="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong class="text-warning">$ ${totalCompra}</strong>
              </li>`;
  const productosCarrito = document.getElementById("productosCarrito");
  productosCarrito.innerHTML = htmlProd;
}
