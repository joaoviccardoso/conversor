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
    const titulo = document.querySelector('h1');
    const tituloFooter = document.querySelector('h4');

    console.log(tituloFooter)

    if (body.classList.contains('corpo__black')) {
       body.classList.remove('corpo__black');
       body.classList.add('corpo__white');

       titulo.classList.remove('titulo');
       titulo.classList.add('texto__white');

       tituloFooter.classList.remove('titulo__rodape');
       tituloFooter.classList.add('rodape__white');
    } else {
       body.classList.remove('corpo__white');
       body.classList.add('corpo__black');
       
       titulo.classList.remove('texto__white');
       titulo.classList.add('titulo');

       tituloFooter.classList.remove('rodape__white');
       tituloFooter.classList.add('titulo__rodape');
    }
})