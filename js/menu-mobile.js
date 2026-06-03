//CAPTURAR EN VARIABLES A LOS ELEMENTOS DEL MENU MOBILE (BOTÓN, LISTA DE OPCIONES)
let btn = document.getElementById("btn-menu-mobile");
let menu = document.getElementById("lista-menu-mobile");
//VARIABLE DE ESTADO (PARA VALIDAR SI SE DEBE ABRIR O CERRAR EL MENU)
let estado = 0;

//ASGINAR EVENTO DE CLICK AL BOTÓN (PARA CERRAR Y ABRIR EL MENU MOBILE)
btn.addEventListener("click", function(){

    //SI EL ESTADO ESTA EN 0: MUESTA LA LISTA DE OPCIONES Y CAMBIA EL VALOR DE ESTADO A 1
    if(estado === 0){
        menu.style.display = "block";
        estado = 1;   
    }
    //SI EL ESTADO ESTA EN 1: OCULTA LA LISTA DE OPCIONES Y CAMBIA EL VALOR DE ESTADO A 0
    else if(estado === 1){ 
        menu.style.display = "none";
        estado = 0;
    }

})