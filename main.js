const form = document.getElementById ('form');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepicionado"/>';
const atividades = [];
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputNomeAtividade = document .getElementById('nome-da-aividade');
    const inputNotaAtividade = document .getElementById('nota-da-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value}já foi inserida`);
    } else {
    (atividades.push(inputNomeAtividade.value));
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value= '';
    inputNotaAtividade.value= '';
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById(`media-final-valor`).innerHTML = mediaFinal;
    document.getElementById(`media-final-resultado`).innerHTML = mediaFinal >= notaMinima ? spanAprovado:spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += nota[i];
    }

    return somaDasNotas/ notas.lengt;
}
