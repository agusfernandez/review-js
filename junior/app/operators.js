// Operadores de Asignacion

// Suma
let suma=10;
suma += 5;
console.log("esto es una suma" + " "+ suma)


// Resta
let resta=10;
resta -= 5; 
console.log("esto es una resta" + " "+resta)

// Resta
let division=10;
division /= 5; 
console.log("esto es una division" + " "+division)

// Multiplicacion
let multiplicacion=10;
multiplicacion *= 5; 
console.log("esto es una multiplicacion" + " "+multiplicacion)

// Exponencial
let exponencial=10;
exponencial **= 5; 
console.log("esto es un exponencial" + " "+exponencial)

/////////////

// Operadores de Aritmeticos

let numero1=50;
let numero2=50;
let resultado =numero1 + numero2;
console.log(resultado);

let number1=40; // creo la variable
number1--; // abreviatura de resto 1 
let resultado1= number1; // guardo el resultado en esta variable
console.log(resultado1);

// que se eleva al cuadrado
let number3=5;
let resultado2= number3 **2;
console.log(resultado2)

// increment
let number4=6; // creo la variable
number4++; //sumo 1
let resultado3=number4; //guardo el resultado
console.log(resultado3);

/////////////////////////////

// Operadores Intermedios

// Igualdad_ Pregunto si son iguales _ rta=false // no  diferencia el tipo de dato si es numero o string en tanto sean distintos "23"/23
let numero5 = 5;
let numero6 = 9;
console.log(numero5==numero6);

//Inegualdad _ Pregunto si los dos valores son distintos 
let numero7 = 5;
let numero8 = 9;
console.log(numero7!==numero8);

let texto= "texto1";
let texto2= "texto3";
console.log(texto!==texto2);

//Igualdad estricta === Pregunto sin el mismo valor y mismo tipo de dato
console.log(texto===texto2);

let numero9= 23;
let numero10=23;
console.log(numero9===numero10);


//////////////////////

//Operadores Logicos

// &&
let num=3;
let num2=8;

let analisis1= num < num2; // es menor num? true
let analisis2= num != num2; //son distintos? true
console.log(analisis1 && analisis2); // true && true > true

// || si una es true entones es true //si las dos son falsas _ false

let num3=10;
let num4=10;

let analisis3= num3 < num4; 
let analisis4= num3 != num4; 
console.log(analisis3 || analisis4); 

// != / negamelo 

let num5=30;
let num6=10;

let analisis5= num5 < num6; 
let analisis6= num6 != num5; 
console.log(!analisis5); 

//combinacion de operaciones

let nume1=3;
let nume2=6;
let nume3=9;
let nume5=1;

let operacion = (nume1>nume5 || nume5<nume3) && (nume2 === !(nume1 !=num5)) && (!num5>num3);
console.log(operacion);





