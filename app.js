const botaoMudarCor = document.querySelector('.modo__claroEscuro');

function conversor() {
    const valorDigitado = parseFloat(document.querySelector('#Valor').value);
    const moeda = document.querySelector('.botao').value;
    console.log(valorDigitado);
    
    const nomeMoeda = moeda.split('-')[0];
    const valorMoeda = moeda.split('-')[1];

    if (isNaN(valorDigitado)) {
        alert('Digite um valor para poder fazer o calculo');
        return;
    }

    const conversao = valorDigitado / valorMoeda;

    const resposta = document.querySelector('section');
    resposta.innerHTML = resposta.innerHTML + ` <div class="resuldados" id="resuldados__conversor">
    <h3 class="texto__resposta">O valor convertido em Real para ${nomeMoeda} ${conversao.toFixed(2)}</h3></div>`
}    

botaoMudarCor.addEventListener('click', function(){
    const body = document.querySelector('body');
    const titulo = document.querySelector('.titulo');

    if (body.classList.contains('corpo')) {
       body.classList.remove('corpo');
       body.classList.add('.corpo__white');
    } else {
       body.classList.remove('corpo__white');
       body.classList.add('corpo')  
    }
})