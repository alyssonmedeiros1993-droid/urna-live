// ===============================
// PROJETO URNA LIVE
// verificacao.js
// ===============================


function verificarSistema(){


    const itens = {

        candidatos:
        localStorage.getItem("candidatos"),

        login:
        localStorage.getItem("loginUrna"),

        live:
        localStorage.getItem("statusLive"),

        mensagem:
        localStorage.getItem("mensagemLive")

    };



    console.log("=== STATUS DO SISTEMA ===");



    console.log(
        "Candidatos:",
        itens.candidatos ? "OK" : "Vazio"
    );


    console.log(
        "Login:",
        itens.login ? "OK" : "Não conectado"
    );


    console.log(
        "Live:",
        itens.live ? itens.live : "Offline"
    );


    console.log(
        "Mensagem:",
        itens.mensagem ? "OK" : "Sem mensagem"
    );


}



verificarSistema();
