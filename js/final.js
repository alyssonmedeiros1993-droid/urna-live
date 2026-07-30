// ===============================
// PROJETO URNA LIVE
// final.js
// ===============================


function calcularResultado(){


    const candidatos = JSON.parse(

        localStorage.getItem("candidatos")

    ) || [];



    const vencedorCampo =
    document.getElementById("vencedor");


    const resumoCampo =
    document.getElementById("resumo");



    if(candidatos.length === 0){

        vencedorCampo.innerHTML =
        "Nenhum candidato cadastrado";

        return;

    }



    candidatos.sort((a,b)=>{

        return (b.votos || 0) - (a.votos || 0);

    });



    const vencedor = candidatos[0];



    vencedorCampo.innerHTML = `

        🏆 ${vencedor.nome}

        <br>

        ${vencedor.votos || 0} votos

    `;



    resumoCampo.innerHTML = "";



    candidatos.forEach(candidato=>{


        resumoCampo.innerHTML += `

            <p>

            ${candidato.nome}:

            ${candidato.votos || 0} votos

            </p>

        `;


    });


}



calcularResultado();
