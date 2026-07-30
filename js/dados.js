// ===============================
// PROJETO URNA LIVE
// dados.js
// ===============================


function obterCandidatos(){


    return JSON.parse(

        localStorage.getItem("candidatos")

    ) || [];


}



function salvarCandidatos(lista){


    localStorage.setItem(

        "candidatos",

        JSON.stringify(lista)

    );


}



function atualizarVoto(id){


    const lista = obterCandidatos();


    const candidato = lista.find(c => c.id === id);



    if(candidato){

        candidato.votos = (candidato.votos || 0) + 1;

    }


    salvarCandidatos(lista);


}



function zerarVotacao(){


    const lista = obterCandidatos();


    lista.forEach(candidato => {

        candidato.votos = 0;

    });


    salvarCandidatos(lista);


}
