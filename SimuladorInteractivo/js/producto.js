class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let productos = [];

/**
 * Carga de base de datos y
 * Carga las Cards de productos en la pagina
 */
function cargarProductos() {
  $.getJSON("../resources/productos.json", function (data) {
    productos = data.productos;
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
    // Evento click de los botones Agregar
    $(".btnAgregar").click((e) => {
      const prod = productos.find((p) => p.id == e.target.parentNode.id);
      agregarAlCarrito(carrito, prod);
      recargarCarrito();
    });
  }).fail(function () {
    console.log("Ha ocurrido un error.");
  });
}
