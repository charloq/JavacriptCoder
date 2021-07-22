class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

/**
 * Carga de base de datos
 */
let productos = [
  new Producto(1, "Mouse gamer", 8000, "./img/mouse.jpeg"),
  new Producto(2, "iMac", 250000, "./img/imac.jpeg"),
  new Producto(3, "Joystick PS4", 9000, "./img/joystick.jpeg"),
  new Producto(4, "Auricular Sony", 14000, "./img/auricular.jpeg"),
  new Producto(5, "Notebook Gamer", 170000, "./img/laptop.jpeg"),
  new Producto(6, "Teclado Gamer", 170000, "./img/teclado.jpg"),
];

/**
 * Carga las Cards de productos en la pagina
 */
function cargarProductos() {
  productos.forEach((prod) => {
    let html = `<div class="col">
                  <div class="card text-white mb-3 border-warning" style="width: 18rem">
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
                  </div>
                </div>`;
    $("#productos").append(html);
  });
}
