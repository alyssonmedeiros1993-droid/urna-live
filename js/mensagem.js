// ===============================
// PROJETO URNA LIVE
// mensagem.js
// ===============================


function carregarMensagem(){


    const mensagemSalva = localStorage.getItem(
        "mensagemLive"
    );


    const campo = document.getElementById(
        "mensagem"
    );


    if(!campo){

        return;

    }



    if(mensagemSalva){


        campo.innerHTML = mensagemSalva;


    }else{


        campo.innerHTML =
        "Aguardando mensagem...";


    }


}



carregarMensagem();



setInterval(()=>{

    carregarMensagem();

},3000);
