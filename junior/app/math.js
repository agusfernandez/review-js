// sqrt es la raiz cuadrada
let number = Math.sqrt(25);
console.log(number);

//cbrt es la raiz cubica
let number2= Math.cbrt(27);
console.log(number2);


//max
let number3= Math.max(27, 33333, 9839238923, 22);
console.log(number3);

//random
let number4= Math.random();
console.log(number4);

//round
let number5=Math.random()*100;
number5=Math.round(number5);
console.log(number5);

//si quiero que salfa un numero entre 1 y 100 pero que no salgan el 1 y el 100
//directamente no lo multiplico por 100 y a numero6 le agrego uno para que no caiga en cero
let number6=Math.random()*99;
number6=Math.floor(number6+1);
console.log(number6);

