# Introduccion de Javascript

## Primeros Pasos
-variables: const/ let -> es un espacio que se guarda en memoria para usarlo mas adelante
-tipos de datos: string, boolean(0,1 // true-false), number
-tipos de datos: undefined, null, nan // error o variables no definidas
-multiple variables : let variable, variable2, variable3
-Hoisting
-alert
-informacion que llegue al user: prompt
-prompt: permite pasar un string a numero

## Operadores de Asignacion
asigna un valor a su operando izquierdo basandose en su operando derecho.
x=y
x+=y
x-=y
x &&= y	

## Operadores Aritmeticos
Toma un valor numerico y asigna un resultado numerico
-Incremento
-Decremento

## Concatenacion
Union de strings
concat / funcion de js exclusiva para strings y te permite concatenar / .concat _ es un metodo de cadena
`${}` Backtikcs

## Operadores Intermedios
-Operadores de Comparacion // comparan dos valores y devuelven un boolean
-Operacion logicos

## Operadores Logicos
-and /or/ not 

## Concatenacion
que se ejecute un codigo un pedazo de codigo segun una condicion

## Arrays
let arrays=[]

## Arrays Asociativos
let pc ={
    nombre: "augus",
    edad: 2,
    hobby: nada
}
console.log(nombre["nombre˝];

## Bucles
1) while // puede generar un loop infinito _ clave sumar uno // pregunta siempre y hasta que no sea falsa no para
numero=0;
while (numero<4){
    numero++
    consolelog(numero)
}
2) do{
 //ejecuto codigo
} while (condicion)
3) break
4) for // correrlo hasta la cantidad de veces que querramos
5) for in // devuelve posicion
6) for of // devuelve el valor directamnente
7) label

## Function
return> tiene que devolvernos un tipo de dato;

## POO
programacion de objetos
-clase / fabrica de objetos
-las clases crean los objetos
-atributos / caracteristicas de esa objeto
-metodos / funciones que puede hacer ese objeto
-contructor/ particularidad que tienen las clases que es una funcion obligatoria
cuando se crea una clase se tiene q crear un constructor
-instancia/ instanciando un objeto

Caracteristicas
.abstraccion > un auto pero estoy omitiendo un monton de detalles> intentar lo que mas podamos al objeto
.modular > posibilida de dividir el codigo en modulos para lleegar a un fin
.abstraccion > terminos generales / perro que ladra o la edad/raza etx
.encapsulamiento > hacer q los datos sean privados
.polimofismo > ver como un objeto actua distinto por sus propiedaddes
.herencia > hereder de una clase padre a hija
.metodo estatico > se crea una clase temporal antes de crear el objeto
.setter > obtener un valor
.getter > cambiarlo o definirlo

## Metodos de cadena
-concat() > une una o mas cadenas
-startsWith() > devulve un boolean
-endsWith()> verifica que termine como lo decimos 
-includes()> verifica si esta 
-indexOf()> devuelve el numero de posicion de un elemento
-lastIndexOf()
-split()> elimina el elemento a borrar
-subtring()
-toUpperCase()
-toString()
-trim (elimina los espacios)
-trimStart() elimina los espacios q edten al pp
-trimEnd() elimina los espacios q esten al final


## Metodos de arrays
-pop() //el ultimo elemento que saque
-shift() //elimina el primer elemento
-push() // agregar un elemento a un array al final
-unshift() //agrega los elementos al pp en un array
-reverse() // invierte el orden de un array
-sort() //ordena de manera alfabetica los elementos d eun array
-splice() //primero se pone la posicion ,  luego poenr la cantidad de elementos que quiero sacar, luego puedo agregar nuevos que elimino
-join() // transform el array en una cadena de texto 
-slice() // que nos muestre la cantidad de elementos que queremos. devuekve una copia del array original
-includes() // preguntar si existe o no en elarray cierto elemento
-indexOf() // me indica en que posicion esta
-lastindexOf() //me indica el ultimo elemento 
//// repiticion
-filter() //bucle y nos crea un nuevo array solo con los elementos que cumpla la condicion
-forEach() // me da indefinido si agrego una condicion
-map() // crea un nuevo array con los resultados de la llamada de la funcion creada

## Objeto Math
-sqrt() //raiz cuadrada de
-cbrt() //raiz cubica
-max() //reciben numeros y me devuelve el mas grande
-min() //lo opuesto a max
-random() // devuelve un numero aleatorio entre 0 y 1
-round() //te devuelve un numero redondeado
-flooer() //redondea para abajo

## DOM
-nodo 
tipos de nodos:
1) document
2) element
3) text // el texto dentro de un elemento
4) atribute //informacion que esta asociado a un  nodo element (href)
5) comentarios

-tipos de seleccion de elementos

document.getElementById()
document.getElementByTagName()
document.querySelector() > clases
document.querySelectorAll()

-metodos

setAttribute('type', 'number');
getAttribute();
removeAttribute();

-atributos globales
setAttribute('contentEditable', 'true');
setAttribute("dir", "rtl"); //direccion de lectura para otros idiomas
setAttribute('hidden', 'true');

-atributos inputs
elemento.style.color="";
elemento.style.backgroundColor="";

-class
titulopp.classList.add() //agregar una nueva clase 
titulopp.classList.remove() 
titulopp.classList.list(1); //nos devuelve la clase en la posicion 1 de esa ckase si hay mas clasess
titulopp.classList.toggle (agrgar la clase si no esta)
titulopp.classList.replace()

-modificacion de elementos
titulopp.textContext; // te devuelve lo que tiene adentro de la etiqueta aunque un pedazo de lo que etsa adentro este con algun estilo en particular, por mas qu tenga alguna parte visibilidad 0 --me devuelve todo la info entera pero no nos muestra las etiquetas
titulopp.innerText; idem al de de arriba pero es afectado por los estilos ..ej: si hay una parte q tiene un estilo que tenga visibilidad cero entonces lo cumple // NO USARLO
titulo.innerHtml - devuelve lo que esta adentro de la etiqueta
titulo.outerHtml - devuelve con la etiqeta incluidas pero ojo que el navegador lo interpreta y no va a aparecer..se puede ver con un alert o console.log

-creacion de elementos
const lista= document.createElement('LI'); > acordarse que siempre en mayuscula // crea un elemento
item.appendChild(textDelItem);
const fragmento= document.createDocumentFragment(); //simplifica si tengo q crear varios elementos

-obtencion de hijos
contenedor3.fistChild //me devuelve un #text porque hay espacios
contenedor3.lastChild
/// esta es la posta
firstElementChild // me devuelve el hijo del primer elemento osea no me aparece el #text
lastElementChild

///todos los nodos hijos
childNode // me devuelve todos los hijos -> estos nodesList NO ES UN ARRAY

//me devuelve las etiequetas html
children // ESTO NO SE PUEDE RECORRER con un forEACH

# Nivel Medio de Javascript

## Objeto Window

-objeto mas importante del dom ya que contiene una gran cantidad de elementos. -> hace referencia a la ventana de windows
Hereda propiedades de element.target

1) open -> abrir una ventana nueva
2) close -> cierra la ventana emergente
3) closed -> verifica si la ventana esta cerrada o no
4) stop -> detiene de cargar lo q esta cargando
5) prompt
6) alert
7) confirm -> estas seguro que queres cerrar esta pagina?
