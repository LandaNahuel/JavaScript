//codigo javascript//
/* declaracion de variables */
//let nombre = "nahuel" ; // recomendable 
//var apellido = 7 ; // no recomendable, malas practicas en el uso de var

/*let nombre = prompt ("ingrese su nombre aqui");
let mensaje = `Hola ${nombre}`;
alert(mensaje);*/
/*
let ano = parseInt(prompt("Ingrese año de nacimiento")); 
let actualidad = parseInt(prompt("Ingrese año actual"));
let resta = (ano - actualidad);
let mensaje=(`Hola tu edad actual es ${resta}`); 
alert(mensaje);

let numero1 = 1;
let numero2 = 10;
console.log(numero1 + numero2)

if (condicion1) 
else if(condicion2) 
else if(condicion3)

let numero=5;
if(numero < 4){
    console.log("es menor que 4")
}
else if(numero < 15){
    console.log("es menor que 15")
}
else if(numero > 15){
    console.log("es mayo o igual a 15")
}*/


/*let edad=35;
let valor=edad===35;
*/

/*
let edad= parseInt(prompt("ingrese su edad"));

if(edad<14){
    alert("no puedes entrar")
}else if(edad<18){
    alert("puedes entrar con un mayor")
}else{
    alert("puedes entrar")
}*/


/*
for(let i=0 ; i < 10; i++){ //CON ESTO REPETIMOS UN 
    console.log("OBJETO");
}
*/

/*
let usuario = prompt("ingrese su usuario");
while(usuario != "andres"){
    alert("usuario incorrecto");
    usuario = prompt("ingrese su usuario");
}
*/

let entrada= prompt("Ingrese el dia").toLowerCase();

while(entrada != "esc" ){
    if(entrada == "lunes"){
        alert(`El ${entrada} tenes dia libre`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "martes"){
        alert(`El ${entrada} tenes clase de JavaScript`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "miercoles"){
        alert(`El ${entrada} tenes cena familiar`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "jueves"){
        alert(`El ${entrada} tenes gimnasio`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "viernes"){
        alert(`El ${entrada} tenes after del laburo`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "sabado"){
        alert(`El ${entrada} tenes salida con amigos`);
        entrada= prompt("Ingrese el dia");
    }else if(entrada == "domingo"){
        alert(`El ${entrada} tenes Game of Trones`);
        entrada= prompt("Ingrese el dia");
    }else {
        alert("Ese dia no existe")
        entrada= prompt("Ingrese el dia");
    }
    
}

