"use strict"
function createObject(param, p2){
    return Object.create(param,p2);
}
let properties = ["nombre", "apellido1", "apellido2"];
let values = ["ff", "dd", "ss"];

console.log(createObject(properties,values));