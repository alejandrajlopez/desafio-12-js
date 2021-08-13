$(document).ready(function() {
    console.log("Listo el DOM");
});
$(window).on('load', function() {
    console.log("Se cargó todo, ¡incluyendo imagenes y archivos externos!");
});




let Servicios = [
    { id: 1, nombre: "Lectura de terot", precio: 1000 },
    { id: 2, nombre: "Lectura de gemas", precio: 900 },
    { id: 3, nombre: "Análisis astrológico", precio: 1500 },
    { id: 4, nombre: "Análisis numerológico", precio: 1200 },
];

let carrito = [];

for (const Servicios of Servicioss) {
    
    $("#app").append(`<div>
                        <h4>  Servicios: ${Servicios.nombre}</h4>
                        <b> $ ${Servicios.precio}</b>
                        <button id="btn${Servicios.id}">Comprar</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(`#btn${Servicios.id}`).on('click', function() {
        console.log(`Compraste ${Servicios.nombre}`);
        carrito.push(Servicioss[Servicios.id - 1]);
        console.log(carrito);
    });
}
$("#botonBorrar").on('click', () => {
    while(carrito.length > 0)
  carrito.pop() })

let visibilidad = true;
$("#botonBorrar").on('click', () => {
    
    visibilidad ? $("#borrar").css({ display: "none" }) : $("#borrar").css({ display: "inline-block" });
    visibilidad = !visibilidad;
    
});

$("#botonBorrar").on('click', () => {
    
    $('body').append('<h1>Borraste el carrito</h1>')
    
});
