// ===============================
// PROJETO URNA LIVE
// resultados.js
// ===============================


function mostrarRanking(){


    const area = document.getElementById("ranking");


    if(!area){

        return;

    }


    let candidatos = JSON.parse(
        localStorage.getItem("candidatos")
    ) || [];



    candidatos.sort((a,b)=>{

        return (b.votos || 0) - (a.votos || 0);

    });



    area.innerHTML = "";



    candidatos.forEach((candidato, indice)=>{


        area.innerHTML += `

            <div class="card">

                <h2>
                    ${indice + 1}º - ${candidato.nome}
                </h2>

                <p>
                    Votos: ${candidato.votos || 0}
                </p>

            </div>

        `;


    });


}



mostrarRanking();



setInterval(()=>{

    mostrarRanking();

},3000);
