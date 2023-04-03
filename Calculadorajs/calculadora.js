var botones=["7","8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/","C"];

function renderizar(){

    const divCalculadora = document.createElement("div");

    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style", "width:50%; margin:20em auto;")

    document.body.appendChild(divCalculadora);

    const divPantalla= document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class", "form-control text-right");
    divPantalla.appendChild(pantalla);

    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);

    for(let i = 0; i<botones.length;i++){
    
        if(i%4==0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class", "row");
            divBotones.appendChild(divFila);
        }
        let boton = document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);
        boton.setAttribute("class", "btn btn-success col-3 border-light");
        boton.innerHTML=botones[i];
        
            boton.addEventListener("click", function(){
                if(botones[i] != "C" ){    
                    procesarEvento(boton);
                }else{
                    borrarContenido(boton);
                }
            })   
        divBotones.appendChild(boton);
        
    }
}

function procesarEvento(boton){

    let miPantalla = document.getElementById("pantalla");
    if(miPantalla.value=="0" || miPantalla.value=="Operacion no valida"){
        miPantalla.value="";
    }
    if(boton.innerHTML != "=" ){
    miPantalla.value+=boton.innerHTML;
    }else{
        try{
        let resultado = math.evaluate(miPantalla.value);
        miPantalla.value= resultado;
        }catch{
            let error = "Operacion no valida";
            miPantalla.value=error;
        }
    }

}

function borrarContenido(boton){
    let miPantalla = document.getElementById("pantalla");
    miPantalla.value="0";
}

renderizar();

