// ===============================
// PROJETO URNA LIVE
// protecao.js
// ===============================


function verificarLogin(){


    const login = localStorage.getItem("loginUrna");


    if(login !== "true"){

        window.location.href = "login.html";

    }


}



verificarLogin();
