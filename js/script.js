const linhaCep = document.querySelector('[data-js-info = "cep"]');
const linhaLocalidade = document.querySelector('[data-js-info = "localidade"]');
const linhaUf = document.querySelector('[data-js-info = "uf"]');
const linhaDdd= document.querySelector('[data-js-info = "ddd"]');

const txtCep = document.querySelector('[data-js-txtCep]');
const btnBuscar = document.querySelector('[data-js-btnBuscar]');

function buscarDados(){
    const cepDigitado = txtCep.value;
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    .then(response => response.json())
    .then(cep =>{
        console.log(cep);
        linhaCep.innerText = cep.cep;
        linhaLocalidade.innerText = cep.localidade;
        linhaUf.innerText = cep.uf;
        linhaDdd.innerText = cep.ddd;
    })
}

btnBuscar.addEventListener('click', buscarDados);