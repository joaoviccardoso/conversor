const botaoMudarCor = document.querySelector('.modo__claroEscuro');
const body = document.querySelector('body');
const titulo = document.querySelector('h1');
const tituloFooter = document.querySelector('h4');
const texto = document.querySelectorAll('.texto');
const aplicativo = document.querySelector('.itens__conversor');
const textoResuldado = document.querySelector('.texto__resposta');
const imgBt = document.querySelector('.imagemClaroEscuro');
const textoBt = document.querySelector('.textoBt');

let modoClaro = "./img/sun.svg"
let modoEscuro = "./img/moon.svg"

function conversor() {
    const valorDigitado = parseFloat(document.querySelector('#Valor').value);
    const moeda = document.querySelector('.botao__selec').value;
    
    const nomeMoeda = moeda.split('-')[0];
    const valorMoeda = moeda.split('-')[1];

    if (isNaN(valorDigitado)) {
        alert('Digite um valor para poder fazer o calculo');
       return;
    }

    const conversao = valorDigitado / valorMoeda;

    const resposta = document.querySelector('section');
    resposta.innerHTML = ` <div class="resuldados" id="resuldados__conversor">
    <h3 class="texto__resposta" font-size: 1rem;>O valor convertido em Real para ${nomeMoeda} ${conversao.toFixed(2)}</h3></div>`
}    

function modoClaroEscuro() {
    if (body.classList.contains('corpo__black')) {
        body.classList.remove('corpo__black');
        body.classList.add('corpo__white');

        titulo.classList.remove('titulo');
        titulo.classList.add('texto__white');

        tituloFooter.classList.remove('titulo__rodape');
        tituloFooter.classList.add('rodape__white');
       
        for(let c = 0; c < texto.length; c++) {
            texto[c].classList.remove('texto');
            texto[c].classList.add('texto__claro');
        }

        aplicativo.classList.remove('itens__conversor');
        aplicativo.classList.add('item__conversor-black');

        textoResuldado.classList.remove('texto__resposta');
        textoResuldado.classList.add('texto__resposta-claro');

        imgBt.src = modoClaro;
        textoBt.textContent = "claro"
    } else{
        body.classList.remove('corpo__white');
        body.classList.add('corpo__black');
       
        titulo.classList.remove('texto__white');
        titulo.classList.add('titulo');

        tituloFooter.classList.remove('rodape__white');
        tituloFooter.classList.add('titulo__rodape');

        for(let c = 0; c < texto.length; c++) {
            texto[c].classList.remove('texto__claro');
            texto[c].classList.add('texto');
        }

        aplicativo.classList.remove('item__conversor-black');
        aplicativo.classList.add('itens__conversor')

        textoResuldado.classList.remove('texto__resposta-claro');
        textoResuldado.classList.add('texto__resposta');

        imgBt.src = modoEscuro;
        textoBt.textContent = "Escuro"
    }
}

function limpar(){
    let respostaLimpar = document.querySelector('section').innerHTML = '';
}