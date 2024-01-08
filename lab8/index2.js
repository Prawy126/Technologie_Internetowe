import {abc, asd} from '.index.js';

asd();

var a;
a = 1;

function b(){
    var c = 1;
    c = 2;
    a=c+1;
    console.log(a);
}

b();

//object literal
let x = {};
console.log(x);

let y = new Object();
console.log(y);