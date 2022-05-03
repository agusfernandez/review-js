// while - bucle infinito se puede tildar hasta que no sea falso
// le podemos sumar 1 ((clavveee))
// lo ejecuta sin parar hasta q se trasnforme en false




//while
let numero = 0;
while (numero < 10){
    numero ++;
    console.log(numero);
} 

// do {}  while()
// primero se ejecuta y despues pregunto

let numero2=0;
do{
    console.log(numero2)
    numero2++;
} while (numero2<10);


// break

let numero3=0;
while (numero3<1000){
    numero3++;
    console.log(numero3);
    // cortame el bucle cuando el numero es 13
    if(numero3 == 13){
        break;
    }
}

// for

for (let i=0; i<=6; i++){
    console.log(i)
}

for (let i=0; i<20; i++){
    if(i==18){
        break;
    }
    console.log(i);
}

//for continue/ que cuente del 1 al 5 y saltearme el 4 con continue

for (let i=40; i<50; i++){
    if (i==44){
        continue;
    }
    console.log(i);
}

//for in: devuelve la posicion del elemento pero podes mostrar el elemento o el valor

let animales = ["gato", "perro", "tortuga"];
for (animalito in animales){
  console.log(animalito);
  console.log(animales[animalito]);
}

//for of: nos devuelve directamente el valor de la posicion

let animalesDos = ["murcielago", "ave", "mono"];
for(animal of animalesDos){
    console.log(animal);
}

arrayOne= ["maria", "marcos", "lucia"];
arrayDos= ["jose", "florencio", arrayOne];

for (let array in arrayDos){
    if (array == 2){
        for (let array of arrayOne){
            console.log(array)
        } 
    } else {
        console.log(arrayDos[array]);
    }
}

//label 

arrayTres= ["maria", "marcos", "lucia"];
arrayCuatro= ["jose", "florencio", arrayTres, "josefa"];

label:
for (let array in arrayCuatro){
    if (array == 2){
        for (let array of arrayTres){
            continue label;
            console.log(array);
        } 
    } else {
        // me salteo loq  tengo en el arraytres y veo el arrayCuatro
        console.log("el nombre es " + arrayCuatro[array]);
    }
}