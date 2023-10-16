"use strict"
var o = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: "34"
}

function mostrarProps (param){
    console.log("Número de propiedades: " + Object.keys(o).length);
    console.log(o);
}

mostrarProps(o);