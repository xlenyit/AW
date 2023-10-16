"use strict"
let frase = "Hola que tal?"
let cont = 0
for(let i = 0; i < frase.length; ++i) {
if (frase[i] == "a") cont++;
}
console.log(cont)