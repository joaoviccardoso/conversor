function conversor() {
    const valorDigitado = parseFloat(document.querySelector('#Valor').value);
    const moeda = document.querySelector('.botao').value;
    
    const nomeMoeda = moeda.split('-')[0];
    const valorMoeda = moeda.split('-')[1];

    const conversao = valorDigitado / valorMoeda;

    console.log(nomeMoeda)
    console.log(valorDigitado)
    console.log(valorMoeda)
    console.log(conversao.toFixed(2))

    const resposta = document.querySelector('section');
    resposta.innerHTML = resposta.innerHTML + ` <div class="resuldados" id="resuldados__conversor">
    <h3 class="texto__resposta">O valor convertido em Real para ${nomeMoeda} ${conversao.toFixed(2)}</h3></div>`
    
}




