"use strict"
let a = 5;
let b = 10;
let c = 3;
if(a > b && a > c) console.log(`El mayor de ${a}, ${b} y ${c} es ${a}`); // IMPORTANTE SON ` y no ' para usar cadenas plantilla !!!
else if(b > a && b > c) console.log(`El mayor de ${a}, ${b} y ${c} es ${b}`);
else if(c > a && c > b) console.log(`El mayor de ${a}, ${b} y ${c} es ${c}`);