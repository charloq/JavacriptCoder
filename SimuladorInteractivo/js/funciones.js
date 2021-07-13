class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let carrito = [];

let productos = [
  new Producto(1, "Mouse gamer", 8000, "./img/mouse.jpeg"),
  new Producto(2, "iMac", 250000, "./img/imac.jpeg"),
  new Producto(3, "Joystick PS4", 9000, "./img/joystick.jpeg"),
  new Producto(4, "Auricular Sony", 14000, "./img/auricular.jpeg"),
  new Producto(5, "Notebook Gamer", 170000, "./img/laptop.jpeg"),
];

function cargarProductos() {
  let divProductos = document.getElementById("productos");
  productos.forEach((prod) => {
    let div = document.createElement("div");
    div.className = "column";
    let html = `<div class="card" style="width: 18rem">
                  <img
                    src=${prod.imagen}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body" id=${prod.id}>
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <a class="btn btn-dark btnAgregar">Agregar</a>
                  </div>
                </div>`;
    div.innerHTML = html;
    divProductos.appendChild(div);
  });
}

//

cargarProductos();

const botonesAgregar = document.querySelectorAll(".btnAgregar");
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    const prod = productos.find((p) => p.id == e.target.parentNode.id);
    carrito.push(prod);
    recargarCarrito();
  });
});

function recargarCarrito() {
  let totalCompra = 0;
  let htmlProd = "";
  carrito.forEach((prod) => {
    totalCompra += prod.precio;
    htmlProd += `<li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">${prod.nombre}</h6>
                  </div>
                  <span class="text-muted">$ ${prod.precio}</span>
                </li>`;
  });

  htmlProd += `<li class="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>$ ${totalCompra}</strong>
              </li>`;
  const productosCarrito = document.getElementById("productosCarrito");
  productosCarrito.innerHTML = htmlProd;
}
