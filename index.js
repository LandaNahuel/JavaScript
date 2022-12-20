const activ= ["dia libre","clase de JavaScript","cena familiar","gimnasio","after del laburo","salida con amigos","Game of Trones"];

function agenda(accion){
    while(accion != "esc" ){
        switch (accion){
        case "consultar":
            let dia = prompt("ingrese el dia").toLowerCase();
            while(accion != "esc" ){
                if(dia == "lunes"){
                    alert(`El ${dia} tenes `+ activ[0]);
                    break;
                }else if(dia == "martes"){
                    alert(`El ${dia} tenes `+ activ[1]);
                    break;
                }else if(dia == "miercoles"){
                    alert(`El ${dia} tenes `+ activ[2]);
                    break;
                }else if(dia == "jueves"){
                    alert(`El ${dia} tenes `+ activ[3]);
                    break;
                }else if(dia == "viernes"){
                    alert(`El ${dia} tenes `+ activ[4]);
                    break;
                }else if(dia == "sabado"){
                    alert(`El ${dia} tenes `+ activ[5]);
                    break;
                }else if(dia == "domingo"){
                    alert(`El ${dia} tenes `+ activ[6]);
                    break;
                }else {
                    alert("Ese dia no existe")
                    break;
                }
            }
        case "agregar":
            class ActividadNueva{
                constructor(actividad, dia, turno) {
                    this.actividad = actividad;
                    this.dia   = dia;
                    this.turno  = turno;
                }
                hablar(){
                    alert("El dia "+ this.dia +" tienes "+this.actividad+" "+this.turno);
                }
            }
            const actNew = new ActividadNueva(prompt("Ingrese una actividad").toLowerCase(), prompt("Ingrese el dia").toLowerCase(), prompt("Indique si es POR LA MAÑANA o POR LA TARDE").toLowerCase());
            actNew.hablar();
        default :
            alert("Comando invalido")
        }
    }
}

alert(agenda(prompt("Ustes desea CONSULTAR agenda o AGREGAR actividad")));



