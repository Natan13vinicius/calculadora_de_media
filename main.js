// puxar o formulario para o javascript
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src ="./img/aprovado.png"alt ="emoji festejando"</img>';
const imgReprovado = '<img src ="./img/reprovado.png"alt ="emoji decepcionado"</img>';

// array atividades
const atividades = [];
// array notas
const notas = [];
// pegar os span html para js
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'

// digite a nota minima
const notaMinima = parseFloat(prompt('Digite a nota minima:'));


// criar variavel linhas com um espaço em branco
let linhas = '';


form.addEventListener('submit', function (e) {
    e.preventDefault()
    adicionaLinha()
    atualizarTabela()
    atualizaMedialfinal()

})

// funçao adicionar linha
function adicionaLinha() {
    // chamar os inputs de nome de atividade e nota
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    // verificar se a atividade ja esta escrita
    // se sim mostra alert
    // se nao ela continua o codigo normal
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`a atividade: ${inputNomeAtividade.value} ja foi inserida.`)
    } else {
        // enviar valor de inputNomeAtividade para array atividade
        atividades.push(inputNomeAtividade.value);
        // enviar valor de inputnotaAtividade para array atividade
        // atribui parsefloat para converter o input para um numero
        // se jogarmos um console.log(notas) para ser executado podemos ver se é string ou numero 
        // devtools
        notas.push(parseFloat(inputNotaAtividade.value));

        // criar variavel que armazena uma linha
        let linha = '<tr>'
        // concatenar coluna com o valor do nome da tarefa
        linha += `<td>${inputNomeAtividade.value}</td>`
        // concatenar a coluna com o valor da nota
        linha += `<td>${inputNotaAtividade.value}</td>`
        // concatenar a 3 coluna dizendo que se NotaAtividade for maior ou igual a 7 mostra imgAprovado
        // e se nao mostra imgReprovado
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td> `
        // fechar linha
        linha += '</tr>'

        // concatenar a var linha dentro da var linhas
        linhas += linha;

    }
    // limpar inputs
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''

}

// funçao atualizar tabela
function atualizarTabela() {
    // chamar o tbody e atribuir e imprimir na tela a variavel linha dentro do ouvidor de eventos
    const corpoTabela = document.querySelector('tbody')
    // imprimir na tela a variavel linha dentro do tbody 
    corpoTabela.innerHTML = linhas;
}

// function atualiza medias
function atualizaMedialfinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('Media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;



    console.log(mediaFinal)



}
// funçao que calcula a media
function calculaMediaFinal() {
    let somaDasNotas = 0
    // repetiçao,enquanto i for menor q o numero de notas concatena mais 1 vez
    // 
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas = somaDasNotas + notas[i]
    }

    return somaDasNotas / notas.length;
}


