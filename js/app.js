const candidatos = [
    {
        id: 1,
        nome: "Candidato 1",
        foto: "https://placehold.co/400x400?text=Candidato+1",
        votos: 0
    },
    {
        id: 2,
        nome: "Candidato 2",
        foto: "https://placehold.co/400x400?text=Candidato+2",
        votos: 0
    }
];

const area = document.getElementById("candidatos");

function atualizarTela() {

    area.innerHTML = "";

    const maior = Math.max(...candidatos.map(c => c.votos), 1);

    candidatos.forEach(candidato => {

        const porcentagem = (candidato.votos / maior) * 100;

        area.innerHTML += `
            <div class="card">

                <img src="${candidato.foto}" alt="${candidato.nome}">

                <div class="nome">
                    ${candidato.nome}
                </div>

                <div class="votos">
                    ${candidato.votos} votos
                </div>

                <div class="barra">
                    <div class="preenchimento" style="width:${porcentagem}%">
                    </div>
                </div>

            </div>
        `;

    });

}

function votar(id) {

    const candidato = candidatos.find(c => c.id === id);

    if (candidato) {
        candidato.votos++;
        atualizarTela();
    }

}

atualizarTela();

setInterval(() => {

    const sorteado = candidatos[
        Math.floor(Math.random() * candidatos.length)
    ];

    votar(sorteado.id);

}, 3000);
