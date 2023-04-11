export default function initViaCepApi(){
    const linhaCep = document.querySelector('[data-js-info = "cep"]');
    const linhaLocalidade = document.querySelector('[data-js-info = "localidade"]');
    const linhaUf = document.querySelector('[data-js-info = "uf"]');
    const linhaLogradouro = document.querySelector('[data-js-info="logradouro"]');
    const linhaDdd= document.querySelector('[data-js-info = "ddd"]');

    const txtCep = document.querySelector('[data-js-txtCep]');
    const spanErros = document.querySelector('[data-js-msnErros]');
    const btnBuscar = document.querySelector('[data-js-btnBuscar]');

    function buscarDados(e){
        e.preventDefault();
        const cepDigitado = txtCep.value;
        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then(response => response.json())
        .then(cep =>{
            linhaCep.innerText = cep.cep;
            linhaLocalidade.innerText = cep.localidade;
            linhaLogradouro.innerText = cep.logradouro;
            linhaUf.innerText = cep.uf;
            linhaDdd.innerText = cep.ddd;
        })
        .catch(() => {
            setTimeout(()=>{
                txtCep.classList.add('error');
                spanErros.classList.add('ativo');
                setTimeout(()=>{
                    txtCep.classList.remove('error');
                    spanErros.classList.remove('ativo');
                },5000);
            }); 
        })
    }

    btnBuscar.addEventListener('click', buscarDados);
    document.addEventListener('keypress', ()=>{
        if(e.key === 'Enter'){
            buscarDados();
        }
    })
}