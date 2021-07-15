function cargarProductos() {
  let divProductos = document.getElementById("productos");
  productos.forEach((prod) => {
    let div = document.createElement("div");
    div.className = "col";
    let html = `<div class="card text-white mb-3 border-warning" style="width: 18rem">
                  <img
                    src=${prod.imagen}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body" id=${prod.id}>
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <a class="btn btn-warning btnAgregar">Agregar</a>
                  </div>
                </div>`;
    div.innerHTML = html;
    divProductos.appendChild(div);
  });
}

cargarProductos();
recargarCarrito();

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

const botonesAgregar = document.querySelectorAll(".btnAgregar");
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    const prod = productos.find((p) => p.id == e.target.parentNode.id);
    agregarAlCarrito(carrito, prod);
    recargarCarrito();
  });
});
