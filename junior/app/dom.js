//seleccion de un elemento entero, nos devuelve un objeto
let parrafo = document.getElementById('parrafo');

//nos devuelve todos los elementos p //nos devuelce una lista de elementos
let parrafo2= document.getElementsByTagName("p");

//query selector// nos devuelve el primer elmeento q encuentre
let parrafo3= document.querySelector('.parrafo2');
//por id
let parrafo4= document.querySelector('#parrafo');

//querySelectorAll //nos devuelve todos los elementos que conincidan //devuelve un node list (lista de nodos)
let parrafo5= document.querySelectorAll('p');

/// cambiar el tipo de un input
const rangoElement= document.querySelector('.rango')
rangoElement.setAttribute('type', 'text');

//obtener el valor del atributo type
rangoElement.getAttribute('type');
//elimina el atributo
//rangoElement.removetAttribute('type', 'text');


//atributs style

const titulo=document.querySelector('.titulo');
titulo.setAttribute('contentEditable', 'true');
titulo.setAttribute('dir', 'rtl');
titulo.style.color="red";
titulo.style.padding="10px";
titulo.style.backgroundColor="black";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const normalInput= document.querySelector('.input-normal');
normalInput.type='number';
//normalInput.setAttribute('maxLength', "5");
normalInput.maxLength="4";
normalInput.placeholder="nuevo placeholder";
normalInput.required= "required";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// agrego una nueva clase con add
const titulopp= document.querySelector('.titulopp');
titulopp.classList.add("segundo-titulo");
titulopp.classList.remove("segundo-titulo");
let nombreclase= "pp";
let valor = titulopp.classList.contains(nombreclase);
// agrega el nomnde de la clase si no existe pero si ya estuviese entonces la elimina, si le agregi ek true y ya la tiene la deja no la saca
titulopp.classList.toggle("grande", true);
titulopp.classList.replace("grande", "gorda");

const texto=titulopp.innerHTML;
alert(texto);
const tecto2=titulopp.outerHTML;
alert(tecto2);


///////////////////////////////////////////////////////////////////////////////////


const contenedor= document.querySelector('.container');
const lista= document.createElement('LI');
const textoLista= document.createTextNode("texto dentro del li que agregi yuuhoo");
lista.appendChild(textoLista);
contenedor.appendChild(lista); // agregue en el cotnenedor padre lo que queria
console.log(textoLista);

// agregar mas elementos a la lista ejemplo:ejecutar varias veces un li


const contenedor2= document.querySelector('.container2');
const fragmento= document.createDocumentFragment();

for(i=0; i<30; i++){
    const lista2= document.createElement('LI');
    lista2.innerHTML="lista larga";
    fragmento.appendChild(lista2);
}

contenedor2.appendChild(fragmento);
console.log(contenedor2);

////////////////////////////////////////////////////////////

const contenedor3 = document.querySelector('.container3');
const primerHijo= contenedor3.firstChild;
console.log(primerHijo);
const primerElementoHijo= contenedor3.firstElementChild;
console.log(primerElementoHijo);
const nodos= contenedor3.childNodes;
console.log(nodos);
console.log(nodos[0]);
// puedo recorrer ese nodo y me muestra claramente cada uno de los elementos NODESELEMENTS
nodos.forEach(nodo=>console.log(nodo));

//children me devuelve la etiqueta HTMl COLLECTIOn
const hijos= contenedor3.children;
console.log(hijos);

// con el of me trae las etiquetas 
// OF > VALOR > me trajo hi la etiqueta
// IN >INDICE
for (hijo of hijos){
    console.log(hijo);
}





