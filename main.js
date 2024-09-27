const form = document .getElementById ('form')
const imgAprovado = '<img src="./midia/3576867.png" alt="Emoji atendido"/>'

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputSeuNome = document.getElementById('seu-nome');
    const inputNumeroDeTelefone = document.getElementById('numero-de-telefone');

    let linha = '<tr>';
    linha += `<td>${inputSeuNome.value}</td>`;
    linha += `<td>${inputNumeroDeTelefone.value}</td>`;
    linha += `<td>${inputNumeroDeTelefone.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputSeuNome.value = '';
    inputNumeroDeTelefone.value = '';
})