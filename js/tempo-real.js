// ===============================
// PROJETO URNA LIVE
// tempo-real.js
// ===============================

function enviarAtualizacao() {

    const dados = {
        horario: new Date().toLocaleTimeString(),
        mensagem: "Atualização da votação"
    };

    localStorage.setItem(
        "atualizacaoUrna",
        JSON.stringify(dados)
    );

}


function receberAtualizacao() {

    const dados = localStorage.getItem("atualizacaoUrna");

    if (dados) {

        return JSON.parse(dados);

    }

    return null;

}


setInterval(() => {

    enviarAtualizacao();

}, 3000);
