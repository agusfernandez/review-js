let contador=0;

const contar=()=>{
    contador++;
    alert(contador);
}


const operacion=(op = '+')=>{
    // pasa un parametro llamado op que pregunta si le pasa el + entonces suma sino resta
    op === '+' ? contador++ : contador--;
    alert (contador);
};

const handleInput=(e)=>{
    console.log(e);
    console.log('buenas');
    const value=e.value;
    console.log('este es el valor' + " " +value);
}