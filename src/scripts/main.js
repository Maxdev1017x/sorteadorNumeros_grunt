document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        event.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value; //valor do campo
        numeroMaximo = parseInt(numeroMaximo); 

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //arrendoda os números
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})

