// ===============================
// PROJETO URNA LIVE
// status.js
// ===============================


function atualizarStatus(){


    const candidatos = JSON.parse(
        localStorage.getItem("candidatos")
    ) || [];


    let total = 0;


    candidatos.forEach(candidato => {

        total += candidato.votos || 0;

    });


    const campoTotal = document.getElementById("totalVotos");

    const campoSituacao = document.getElementById("situacao");


    if(campoTotal){

        campoTotal.innerHTML = total;

    }


    if(campoSituacao){

        if(total > 0){

            campoSituacao.innerHTML = 
            "🟢 Votação acontecendo";

        }else{

            campoSituacao.innerHTML =
            "🟡 Aguardando votação";

        }

    }


}



atualizarStatus();


setInterval(()=>{

    atualizarStatus();

},3000);
