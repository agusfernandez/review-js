// concat()
let saludar =  "Hola, me llamo ";
let nombre = "Agustina";
let resultado = saludar.concat(nombre);
console.log(resultado);


let string = new String("es como lo de ");
let string2 = "arriba";
let stringResult= string.concat(string2);
console.log(stringResult); 

// startsWith() verificar si una "palabra" esta en la segunda cadena // helado empieza en la frase
let text="helado de limon";
let textTwo="helado";
let resultText= text.startsWith(textTwo);
console.log(resultText);

//endsWith()
let textThree="helado de limon";
let textFour="limon";
let resultText2= textThree.endsWith(textFour);
console.log(resultText2);

//includes()
let newText= "me encuentro en londres";
let textFive= "encuentro";
let resultText3= newText.includes(textFive);
console.log(resultText3);

//indexOf() devuelve la posicion
let textSix="esto es una nueva cadena";
let resultText4= textSix.indexOf("cadena");
console.log(resultText4);

let textSeven="prueba de posicionamiento";
let resultText5=textSeven.indexOf("posicionamiento");
console.log(textSeven[12]);

//lastIndexOf()
let textEight="esto es una nueva cadena cadena cadena candena";
let resultText6= textEight.lastIndexOf("cadena");
console.log(resultText6);

//split (me elimina el elemento q queiro sacar) y devuelve un array con los elementos separados
let textNine= "Hola esto es un carnaval";
let resultText7= textNine.split("esto");
console.log(resultText7);

//substring // te permite elimnar elementos que les indiques > que arrangque en la posiion 0 y que termine en la posicion 2
let textTen= "ASAAASSSS";
let resultText8= textTen.substring(0, 2);
console.log(resultText8);

// toUpperCase()

let textEleven= "esto tiene que estar en mayusculas";
let resultText9= textEleven.toUpperCase();
console.log(resultText9);

//trim

let text12= "        no tiene que tener espacios";
console.log(text12.length);

let resultText10= text12.trim();
console.log(resultText10.length);
