let lista: string[] = ["mayonesa", "agua", "harina"];
let precio: number[] = [250, 190, 80];
let stock: number[] = [20, 12, 14];
let divElementos = document.getElementById("elementos");
let cargarProductos = () => {
  for (let i: number = 0; i < lista.length; i++) {
    let divProducto = document.createElement("div");
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = lista[i];
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = "$" + precio[i];
    let cantidad = document.createElement("input");
    cantidad.id = "cantidad" + [i];
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";
    divElementos.appendChild(divProducto);

    divProducto.appendChild(nombreProducto);
    divProducto.appendChild(precioProducto);

    divProducto.appendChild(cantidad);
  }
};
cargarProductos();
