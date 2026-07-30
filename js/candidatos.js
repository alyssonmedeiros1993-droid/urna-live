// ===============================
// PROJETO URNA LIVE
// candidatos.js
// ===============================

let candidatos = JSON.parse(
    localStorage.getItem("candidatos")
) || [];


function adicionarCandidato(){

    const nome = document.getElementById("nomeCandidato").value;
    const foto = document.getElementById("fotoCandidato").value;


    if(nome === ""){

        alert("Digite o nome do candidato");

        return;

    }


    const novoCandidato = {

        id: Date.now(),

        nome: nome,

        foto: foto || "https://placehold.co/400x400?text=Candidato"

    };


    candidatos.push(novoCandidato);


    salvarCandidatos();

    mostrarCandidatos();


    document.getElementById("nomeCandidato").value = "";
    document.getElementById("fotoCandidato").value = "";

}


function salvarCandidatos(){

    localStorage.setItem(
        "candidatos",
        JSON.stringify(candidatos)
    );

}


function mostrarCandidatos(){

    const lista = document.getElementById("listaCandidatos");


    if(!lista){

        return;

    }


    lista.innerHTML = "";


    candidatos.forEach(candidato => {


        lista.innerHTML += `

            <div class="card">

                <img 
                src="${candidato.foto}" 
                width="150">

                <h3>
                ${candidato.nome}
                </h3>

            </div>

        `;


    });


}


mostrarCandidatos();
