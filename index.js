function agenda(accion){
        while(accion != "esc" ){
            switch (accion){
            case "consultar":
                let dia = prompt("ingrese el dia");
                while(accion != "esc" ){
                    if(dia == "lunes"){
                        alert(`El ${dia} tenes dia libre`);
                        break;
                    }else if(dia == "martes"){
                        alert(`El ${dia} tenes clase de JavaScript`);
                        break;
                    }else if(dia == "miercoles"){
                        alert(`El ${dia} tenes cena familiar`);
                        break;
                    }else if(dia == "jueves"){
                        alert(`El ${dia} tenes gimnasio`);
                        break;
                    }else if(dia == "viernes"){
                        alert(`El ${dia} tenes after del laburo`);
                        break;
                    }else if(dia == "sabado"){
                        alert(`El ${dia} tenes salida con amigos`);
                        break;
                    }else if(dia == "domingo"){
                        alert(`El ${dia} tenes Game of Trones`);
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
                const actNew = new ActividadNueva(prompt("Ingrese una actividad"), prompt("Ingrese el dia"), prompt("Indique si es POR LA MAÑANA o POR LA TARDE").toLowerCase());
                actNew.hablar();
            default :
                alert("Comando invalido")             
            }
        }
    }
    
alert(agenda(prompt("Ustes desea CONSULTAR agenda o AGREGAR actividad")));


