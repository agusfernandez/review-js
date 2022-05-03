// vector es un objeto
// acceder a las propiedades de un vector

// arrays simples : corchetes conjunto de datos q contienen la info

const marvel = [
    "capitan america",
    "hulk",
    "black widow"
    
]

const teamcap = [
    "captain america",
    "spiderman",
    "winter soldier"
]
console.log(marvel);

//propidades son todo lo q no tenga () ya que cuenta la caracteristicas q tiene un vector
//length devuelve la cantidad de elementos q hay en un vector
marvel.length;
console.log(marvel.length);

//los vectores arrancan en la posicion 0
document.write(`el primer vengador es ${marvel[0]}<br/>`);
//mostrar el ultimo elemento del array--- ya sabemos q con el length devuelve todos los elementos dentro del vector y sabiendo q el primer elemento esta en cero, y asi le resto uno.
document.write(`el ultimo vengador es ${marvel[marvel.length-1]}<br/>`);

// Push (agregar dentro del array un elemetno)
marvel.push("Ant Man");
console.log(marvel);

//otra forma de pushear sin push
marvel[marvel.length]="Linterna Verde";
console.log(marvel);

//forma de pisar el ultimo lugar
marvel[marvel.length-1]="Sierra";
console.log(marvel);

// Push agrega al ultimo lugar del vector
marvel.push("Super Sandwich");
console.log(marvel);
// Pop > elimina el ultimo valor y
marvel.pop();
console.log(marvel);

//lo quiero ver de otra forma, le da un formato diferente
marvel.join(" , ");
document.write(`Los vengadores son ${marvel}<br/>`);

//juntar dos arrays
const npnc= "Frank";
const teamComplete= marvel.concat(teamcap, npnc);
document.write(`El equipo unido son:  ${teamComplete}<br/>`);

// const teamReverse= marvel.reverse();
// console.log(teamReverse);
// document.write(`El equipo unido son al reves:${marvel.reverse().join(" , ")}<br/>`);

//metedos de arrays
let array=["jorge", "luis" , "mariano"];
let resultArray= array.pop();
console.log(resultArray);