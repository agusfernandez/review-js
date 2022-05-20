window.open("https://youtube.com");
let ventana= window.open("https://google.com");
ventana.close();

let confirmacion=confirm("estas seguro que te queres ir?");
console.log(confirmacion);


// Saber el screen y poder acceder a sus propiedades
const screens= window.screen;
console.log(screens);
console.log(screens.availWidth);

// Scroll
const scrolling= window.scroll(0,100);

//location
window.location.href
window.location.pathname
window.location.protocol
window.location.hostname
window.location.assign()
