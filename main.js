const form = document.getElementById('form-valida');

function validaValor(valorA, valorB) {
    return valorB >= valorA
}

form.addEventListener('submit', function(e) {
    let formEValido
    e.preventDefault();

    const valorA = document.getElementById('valorA').value;
    const valorB = document.getElementById('valorB').value;    
    const mensagemSucesso = `Validação correta. o valor de B: ${valorB} é maior que o valor de A: ${valorA})`;
    
    formEValido = validaValor(valorA, valorB)
    if (formEValido) {
        alert(mensagemSucesso);
        valorA.value = '';
        valorB.value = '';

    } else {
        alert('O valor B não pode ser menor que A!');
    }
})

console.log(form);