// ===============================
// PROJETO URNA LIVE
// sincronizacao.js
// ===============================


function salvarDadosLive(dados){

    localStorage.setItem(
        "dadosLive",
        JSON.stringify(dados)
    );

}



function carregarDadosLive(){

    const dados = localStorage.getItem("dadosLive");


    if(dados){

        return JSON.parse(dados);

    }


    return null;

}



function atualizarSincronizacao(){

    const dados = {

        data: new Date().toLocaleString(),

        status: "online"

    };


    salvarDadosLive(dados);

}



setInterval(()=>{

    atualizarSincronizacao();

},5000);
