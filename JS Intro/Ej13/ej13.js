"use strict"
function createObject(param){
    return Object.create(param);
}
let properties = ["nombre", "apellido1", "apellido2"];
console.log(createObject(properties));