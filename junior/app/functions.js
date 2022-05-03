// functions
function saludar(){
    return 40;
}

let saludos = saludar()
console.log(saludos)

// parametros
let nume1= 30;
let nume2= 60;
function sumar (){
    let resultado= nume1+nume2;
    console.log(resultado);
    return resultado;
}

sumar()

function sumaDos(numero3, numero4){
    let resultadoDos= numero3+numero4;
    console.log(resultadoDos);
    return resultadoDos;
}
sumaDos(11,90);
sumaDos(1,92);

function sumaTres(nume4, nume5){
    let res= nume4+nume5;
    return res;
}

let resultadoTres = sumaTres(6,3);
console.log(resultadoTres);

// scope regional
function saludosDos(nombre, apellido){
    return `hola ${nombre} ${apellido} ... Como estas?`

}

let saludando = saludosDos("agustina", "fernandez");
console.log(saludando);


const saludoTres = (edad)=>{
    let frase= `la edad es ${edad}`
    console.log(frase);
}

saludoTres(30);





// el split permite q un string pase a json
const abcedario = "abcdefgh";
const union=abcedario.split("");
console.log(union);
document.write(`<div class="col-lg-12">${union}</div>`)

//el parametro aumenta el valor de la funcion
// los parametros no hacen falta q estend definidas
const saludarUsuario= (usuario)=>{
    document.write(`<div class="col-lg-12">Bienvenido ${usuario}</div>`)
}

// las funciones deben cumplir una tarea y si tienen q hacer mas funciones se puede dividir
const cargaNumeros =(numero)=>{
    const numeros =[];
    // uso el for para me devuelva todos los numeros
    //esta funcion va a cargar 3 numeros o las que se seteen 
    for(let i=0; i<numero; i++ ){
        const num = parseInt(prompt("Ingrese un numero"));
        numeros.push(num);
    }
    //debajo del return no se ejecuta nada mas y corta y va al siguiente
    return (numeros); // esta retornando al exterior la variable numeros
}

// si recibo un objeto o una iteacion puedo hacer un typeof
const numerosPares =(array)=>{
    const pares=[];
    if(typeof array == "object"){
        for(let i=0; i<array.length; i++){
            array[i]%2 == 0 ? pares.push(array[i]) : null;
        }
}
    console.log(pares);
    return pares;
}

const mostrarMayores = (arraymay)=>{
    const mayores =[];
    const menores=[];
    for(let i=0; i<arraymay.length; i++){
    // arraymay[i] >8 ? mayores.push(array[i]) : null;
    arraymay[i] >= 8 ? mayores.push(arraymay[i]) : menores.push(arraymay[i]);
    }

    console.log(`Los mayores son ${mayores} y los menores son ${menores}`);
}

