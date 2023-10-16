Escribir una función “createObject” que cree un objeto con las propiedades cuyos nombres se indican
en el parámetro de la función que es de tipo Array formado por cadenas. El objeto creado tiene todas
las propiedades inicializadas a la cadena vacía. Por ejemplo, la siguiente llamada a función:
let properties = ["nombre", "apellido1", "apellido2"];
createObject(properties);
creará el siguiente objeto:
{ nombre: “”,
 apellido1: “”,
 apellido2: “”
}