class animal{
    // parametros que pueden tener mi obejeto
    //this es el objeto 
    constructor(especie, edad, color){
        // el objeto va ser igual a el paratrmo q pase en especie   
        this.especies= especie;
        this.edades= edad;
        this.colores = color;
        this.informacion = `soy de la ${this.especies}, tengo ${this.edades} años y mi color es ${this.colores}`
    }
    

    verInfo (){
        console.log(`se puede ver la info de la especie: ${this.informacion}`)
    }

    ladrar(){
        if(this.especies=="perro"){
            console.log(`guauuu es un ${this.especies}`);
        } else {
            console.log(`sory es un ${this.especies}, no un perro`);
        }
    }


}

const perro = new animal("perro", 2, "blanco");
const gato = new animal("gato", 3, "negro");
const pajaro = new animal ("pajaro", 5 , "verde");

console.log(perro);
console.log(perro.edades);
//// metodo _ acciones q podamos hacer y se crean dentro de la clasey se refieren 100% a las claseas


pajaro.verInfo();
gato.verInfo();
perro.verInfo();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();


// herencia

class zorro extends animal{
    constructor(especie, edad, color, raza){
        //La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.llama al constructir dek objeto padre o el metodo
        super(especie, edad, color);
        this.razas = raza;
    }

    extincion(){
        if (this.razas =="en peligro de extincion"){
            console.log(`la especie es ${this.especies}`);
        } else {
            console.log('no esta en peligro de extincion');
        }
    }

    static cazar(){
        console.log("el zorrito esta cazando");
    }

}

const zorros = new zorro ("zorro artico", 6, "blanco", "en peligro de extincion");
zorros.verInfo();
zorros.extincion();

zorro.cazar();

//getter y setters

class elefante extends animal{
    constructor(especie, edad, color, altura ){
        super(especie, color, edad);
        this.altura = null;
    }
    // lo toma como una nueva propiedad
    set modificarAltura(newAltura){
        this.altura= 4;
    }

    get obtenerAltura(){
        return this.altura; 
    }
}

const elefantes = new elefante ("gato", 6, "negro");
elefantes.modificarAltura= 3;
console.log(elefantes.altura);
console.log(elefantes.obtenerAltura);
