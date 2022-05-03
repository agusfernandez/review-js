recipiente = "dalto";
console.log(recipiente);

// Tipo de datos
string="string";
number= 20;
boolean= true;


//Declaracion de la variable ___ Scope 
//alcance dentro del mismo bloque: let
let scope = "scope limitante";

//variable q nunca cambia
const name = "agus";

//variable mas global
var global = "global";

// undefined --> prueba de como es una variable indefinida..en donde la variable existe en el programa pero no tiene valor
let undefined;
console.log(undefined);

undefined= "indefinida";
console.log("la defino " +undefined);

//multiple variables
let numero1, numero2, numero3;
numero1=2;
numero2=5;
numero3=3;
console.log(numero1, numero2, numero3);

//Null --> le pasamos un valor que no vale nada..null si esta definida y ya esta inicializada
let nul=null;
console.log(nul)

//NaN -- not a number
let nan = 5;
let nan2 = "perro";
console.log(nan * nan2); 

//Prompt
let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

