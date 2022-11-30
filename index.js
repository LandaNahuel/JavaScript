

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

