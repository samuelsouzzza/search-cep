const linhaCep = document.querySelector('[data-js-info = "cep"]')
const linhaLocalidade = document.querySelector('[data-js-info = "localidade"]')
const linhaLogradouro = document.querySelector('[data-js-info = "logradouro"]')
const linhaIbge= document.querySelector('[data-js-info = "ibge"]')

const txtCep = document.querySelector('[data-js-txtCep]')
const btnBuscar = document.querySelector('[data-js-btnBuscar]');

function buscarDados(){
    const cepDigitado = txtCep.value;
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(response => response.json())
        .then(cep =>{
            linhaCep.innerText = cep.cep;
            linhaLocalidade.innerText = (cep.localidade || 'Informação indisponível');
            linhaLogradouro.innerText = cep.logradouro;
            linhaIbge.innerText = cep.ibge;
        }
    );
}

btnBuscar.addEventListener('click', buscarDados);