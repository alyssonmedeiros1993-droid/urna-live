// ===============================
// PROJETO URNA LIVE
// contador.js
// ===============================


function atualizarContador(){


    const candidatos = JSON.parse(

        localStorage.getItem("candidatos")

    ) || [];



    let total = 0;



    candidatos.forEach(candidato => {


        total += candidato.votos || 0;


    });



    const campo = document.getElementById(
        "contador"
    );



    if(campo){


        campo.innerHTML = total;


    }


}



atualizarContador();



setInterval(()=>{


    atualizarContador();


},3000);
