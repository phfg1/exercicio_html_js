const formulario = document.getElementById('form-ab');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const num_a = parseFloat(document.getElementById('numero-a').value);
    const num_b = parseFloat(document.getElementById('numero-b').value);

    if (num_b > num_a) {
        mensagem.textContent = 'B é maior que A';
        mensagem.className = 'message success';
    } else {
        mensagem.textContent = 'B deve ser maior que A';
        mensagem.className = 'message error'
    }

    formulario.reset();
    
});


