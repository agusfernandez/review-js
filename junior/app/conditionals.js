// sacar el valor de un radio a partir de lo que ingrese un user
// (PI * r * r/2)
// como nose que valor entra en el prompt entonces q responda a los deciamles
const radio = parseFloat(prompt("Ingrese un valor numerico para el radio"));
const resultado = PI * radio ** 2;
console.log(`hola esto es el ${resultado}`);


// ingresar el nombre y la edad de dos personas y mostra por pantalla cual es mayor
const personaUno = prompt("Ingrese un primer nombre");
const edadUno = parseInt (prompt("Ingrese un primer nuemero"));
const personaDos = prompt("Ingrese un segundo nombre");
const edadDos = parseInt (prompt("Ingrese un segundo numero"));
const diferencia = ()=>{
    if (edadUno>edadDos){
        console.log(`${personaUno} es el mayor y tiene ${edadUno}`);
    } else if(edadUno<edadDos){
        console.log(`${personaDos} es el mayor y tiene ${edadDos}`);
    } else{
        console.log("ambos tienen la misma edad");
    }
}
diferencia();

// Preguntar si el usuario y la constraseña son correctos
const userAdmin= "agusfer";
const passwordAdmin = "password";
const user= prompt("Ingrese el user");
const password= prompt("Ingrese el password");

if (user === userAdmin && password===passwordAdmin){
    document.write(`<div class="bienvenido">Bienvenido ${userAdmin}</div>`);
} else{
    alert (`afueraaaaa no es bienvenido ${user}`);
}

// condicional ternario y con la coma puedo anidar mas conexiones
const mascota = "perro";
const ingresoMascota = prompt("Ingrese su mascota");
(ingresoMascota === mascota ) ? (console.log(`perfecto es un ${mascota}`),document.write(`<div class="mascota">Es un lindo ${mascota}</div>`)) : console.log(`no es un ${mascota}`);





