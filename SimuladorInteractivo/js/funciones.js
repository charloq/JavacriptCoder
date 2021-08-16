/**
 * Manejo document_ready
 */
$(document).ready(() => {
  cargarProductos();
  recargarCarrito();
  $("#form-productos").hide();
  $("#form-productos").show(1000);

  // Evento click del botón Limpiar
  $("#btn-limpiar").click(() => {
    vaciarCarrito();
    refrescarCarrito();
  });

  // Evento click del botón Comprar
  $("#btn-compra").click((e) => {
    e.preventDefault();
    let totalCompra = 0;
    carrito.forEach((prodCarrito) => {
      let prod = prodCarrito.producto;
      totalCompra += prod.precio * prodCarrito.cantidad;
    });
    vaciarCarrito();
    refrescarCarrito();
    let htmlProd = `<div class="alert alert-warning" role="alert">
                      Has realizado tu compra por un monto de $${totalCompra}
                    </div>`;
    $("#productosCarrito").html(htmlProd);
    $("#productosCarrito").hide();
    $("#productosCarrito").show(1000);
    setTimeout(() => {
      window.location = "./home.html";
    }, 2000);
  });
});
