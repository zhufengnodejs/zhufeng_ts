
String.prototype.double = function(){
    return this+'+'+this;
}

let result = 'hello'.double();
console.log(result);
console.log(window.myname);