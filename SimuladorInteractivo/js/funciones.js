/**
 * Manejo document_ready
 */
$(document).ready(() => {
  cargarProductos();
  recargarCarrito();

  // Evento click de los botones Agregar
  $(".btnAgregar").click((e) => {
    const prod = productos.find((p) => p.id == e.target.parentNode.id);
    agregarAlCarrito(carrito, prod);
    recargarCarrito();
  });

  // Evento click del botón limpiar
  $("#btn-limpiar").click(() => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});
