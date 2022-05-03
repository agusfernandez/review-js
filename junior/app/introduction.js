
// definicion de variables

// var, let, const
const PI= Math.PI;
console.log(PI);
const name = "agustina";
console.log(name);
const _password = "estaprotegida";


//modificables en tiempo de ejecucion
let apellido = "fernandez";
apellido = "marcos";
let alumnoEdad = 32;
console.log(apellido + alumnoEdad);

// queremos usar la info  q llega por el usuario 
// prompt
// parseInt
// parseFloat

const nombreIngresado= prompt("Ingresa tu nombre"); //sabemos q nos retorna un string
console.log(nombreIngresado);

// primero se ejecuta lod e adentro y luego lo de afuera
const age = parseInt(prompt("Ingresa tu edad"));
const anotherNumber = parseInt(prompt ("Ingresa otro numero"));
// acordarse q los prompts devuelven un string no un numero por lo que no  suma.
const suma = age + anotherNumber;
//const sumaDos = parseInt(age) + parseInt (anotherNumber);
const porcentaje = parseFloat("22.3333");
Math.round(porcentaje);
console.log("valor de porcentaje: " + porcentaje);

// mostrar dentro del document

//convertir el string a numero con parseInt()
//document.write("la suma de todos los numero es " + suma + "<br/>"); 
console.log("la suma de todos los numero es " + suma + "<br/>"); 
const valorRandom=Math.random()*25;
console.log("valor random " + valorRandom );
//document.write ("eso es un valor aleatorio " + valorRandom + "<br/>");


// forma de concatenar mas limpiamente > template string
//document.write (`<div class="nombre__ingresado">Hola ${nombreIngresado} ¿como estas?. Tu edad es ${age}</div> <br/> `);
console.log (`<div class="nombre__ingresado">Hola ${nombreIngresado} ¿como estas?. Tu edad es ${age}</div> <br/> `);
console.log(`hola esto es un ${porcentaje}`);
