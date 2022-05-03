//metedos de arrays

//pop () (elimina el ultimo elemento)
let array=["jorge", "luis" , "mariano"];
let resultArray= array.pop();
console.log("pop " + resultArray);
console.log("pop quedaron: " + array);


//shift ()
let array2=["jorge", "luis" , "mariano"];
let resultArray2= array2.shift();
console.log("shift " + resultArray2);
console.log("shift quedaron: " + array2);

//push()
let array3= ["jorge", "luisa", "mariana" , "guido"];
let resultArray3=array3.push("miguel");
console.log(resultArray3); // me devuelve la cantidad que hay y me marca que agrego el nombre
console.log(array3);

//unshift()
let array4= ["jorge", "luisa", "mariana" , "guido"];
let resultArray4=array4.unshift("miguel");
console.log(resultArray4); 
console.log(array4);

//splice()
let array5=  ["marta", "luis", "pepito", "marcos", "delfina", "sol"];
console.log(array5);
let resultArray5=array5.splice(3,2, "gerardo");
console.log(resultArray5);
console.log(array5);

//join()
let array7=  ["marta", "luis", "pepito", "marcos", "delfina", "sol"];
console.log(array7);
let resultArray7=array7.join(' ');
console.log("resultado:" + resultArray7);

//slice
let array8= ["geronimo", "valentin", "pedro", "mariano", "sofia"];
// -1 es el ultimo elemento del array
let resultArray8= array8.slice(0,-1);
console.log(resultArray8);

//includes
let array9= ["geronimo", "valentin", "pedro", "mariano", "sofia"];
let resultArray9= array9.includes("valentin");
console.log("existe: " + resultArray9);

//indexOf
let array10= ["geronimo", "valentin", "pedro", "mariano", "sofia"];
let resultArray10= array10.indexOf("valentin");
console.log("index: " + resultArray10);

//lastiIndexOf
let array11= ["geronimo", "valentin", "valentin", "valentin", "valentin"];
let resultArray11= array11.lastIndexOf("valentin");
console.log("last-index: " + resultArray11);

//filter
let array12= ["geronimo", "valentin", "valentin", "valentin", "valentin"];
let resultArray12= array12.filter((arraynuevo => console.log(arraynuevo)));

let nombres=["amanda", "eliana" , "analia" , "juan" , "melisa" , "clotilde" , "lu"];
let result = nombres.filter(nombre=>nombre.length>5);
console.log("los nombre son " + result);

//forEach()
let array13= ["geronimo", "valentin", "valentin", "valentin", "valentin"];
let resultArray13= array13.forEach((arraynuevo2 => console.log(arraynuevo2)));

//map()
let numbers= [1,3,5,6];
let resultadomat= numbers.map(number=> console.log("los numero finales son : " +number*2));
