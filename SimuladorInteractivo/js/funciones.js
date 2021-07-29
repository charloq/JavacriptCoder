/**
 * Manejo document_ready
 */
$(document).ready(() => {
  cargarProductos();
  recargarCarrito();
  $("#form-productos").hide();
  $("#form-productos").show(1000);

  // Evento click del botón limpiar
  $("#btn-limpiar").click(() => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});
