// ===============================
// PROJETO URNA LIVE
// menu.js
// ===============================


function abrir(pagina){

    window.location.href = pagina;

}



function sair(){

    localStorage.removeItem(
        "loginUrna"
    );


    window.location.href = "login.html";

}
