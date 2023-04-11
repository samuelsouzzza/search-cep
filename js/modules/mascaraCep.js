export default function initMascaraCep(){
    const txtCep = document.querySelector('[data-js-txtCep]');

    function mascaraCep(){ if(txtCep.value.length == 5) txtCep.value += '-'; }
    txtCep.addEventListener('keypress', mascaraCep);
}