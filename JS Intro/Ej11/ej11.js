"use strict"
function primitiveOrObject (param){
    if (typeof (param) == "object") console.log(typeof (param));
    else console.log(`primitivo ${typeof (param)}`);
}

primitiveOrObject(8);
primitiveOrObject([2,2,2]);