// ===============================
// PROJETO URNA LIVE
// login.js
// ===============================


const usuarioCorreto = "admin";

const senhaCorreta = "123456";



function entrar(){


    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");



    if(usuario === usuarioCorreto && senha === senhaCorreta){


        localStorage.setItem(
            "loginUrna",
            "true"
        );


        mensagem.innerHTML =
        "✅ Login realizado com sucesso";


        setTimeout(()=>{

            window.location.href = "index.html";

        },1000);



    }else{


        mensagem.innerHTML =
        "❌ Usuário ou senha incorretos";


    }


}
