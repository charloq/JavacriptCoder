class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let productos = [
  new Producto(1, "Mouse gamer", 8000, "./img/mouse.jpeg"),
  new Producto(2, "iMac", 250000, "./img/imac.jpeg"),
  new Producto(3, "Joystick PS4", 9000, "./img/joystick.jpeg"),
  new Producto(4, "Auricular Sony", 14000, "./img/auricular.jpeg"),
  new Producto(5, "Notebook Gamer", 170000, "./img/laptop.jpeg"),
  new Producto(6, "Teclado Gamer", 170000, "./img/teclado.jpg"),
];
