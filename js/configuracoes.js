<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Candidatos - Urna Live</title>

    <link rel="stylesheet" href="../css/style.css">
</head>

<body>

<header class="topo">

    <h1>👥 Candidatos</h1>

    <p>Gerenciamento dos candidatos da votação</p>

</header>


<main class="conteudo">


<section class="card">

    <h2>Novo candidato</h2>

    <input 
        type="text" 
        id="nomeCandidato" 
        placeholder="Nome do candidato">

    <br><br>

    <input 
        type="text" 
        id="fotoCandidato" 
        placeholder="Link da foto">

    <br><br>

    <button onclick="adicionarCandidato()">
        Adicionar candidato
    </button>

</section>


<section class="card">

    <h2>Lista de candidatos</h2>

    <div id="listaCandidatos">

    </div>

</section>


</main>


<script src="../js/candidatos.js"></script>

</body>

</html>
