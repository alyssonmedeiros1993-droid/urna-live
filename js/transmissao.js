// ===============================
// PROJETO URNA LIVE
// transmissao.js
// ===============================


let liveAtiva = false;



function iniciarLive(){


    liveAtiva = true;


    atualizarStatus();


    localStorage.setItem(
        "statusLive",
        "online"
    );


}



function pausarLive(){


    liveAtiva = false;


    atualizarStatus();


    localStorage.setItem(
        "statusLive",
        "pausada"
    );


}



function atualizarStatus(){


    const campo = document.getElementById(
        "statusLive"
    );


    if(!campo){

        return;

    }



    if(liveAtiva){


        campo.innerHTML =
        "🟢 Live ativa";


    }else{


        campo.innerHTML =
        "🔴 Live pausada";


    }


}




function enviarMensagem(){


    const mensagem =
    document.getElementById(
        "mensagemLive"
    ).value;



    localStorage.setItem(

        "mensagemLive",

        mensagem

    );


    alert(
        "Mensagem enviada para a live!"
    );


}



atualizarStatus();
