// ===============================
// PROJETO URNA LIVE
// painel.js
// ===============================

let votos = {
    candidato1: 0,
    candidato2: 0
};


function adicionarVoto(id) {

    if (id === 1) {
        votos.candidato1++;
    }

    if (id === 2) {
        votos.candidato2++;
    }

    salvarVotos();

    alert("Voto adicionado com sucesso!");

}


function zerarVotos() {

    votos.candidato1 = 0;
    votos.candidato2 = 0;

    salvarVotos();

    alert("Votação zerada!");

}


function salvarVotos() {

    localStorage.setItem(
        "votosUrna",
        JSON.stringify(votos)
    );

}


function carregarVotos() {

    const dados = localStorage.getItem("votosUrna");

    if (dados) {
        votos = JSON.parse(dados);
    }

}


carregarVotos();
