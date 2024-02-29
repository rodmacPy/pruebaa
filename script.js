const input            = document.getElementById('input');
const boton            = document.getElementById('boton');
const mostrarResultado = document.getElementById('mostrarResultado');
// let query = <script>alert('hola');</script>

boton.addEventListener('click', () => {
    const palabra = input.value.trim();
    mostrarResultado.innerHTML += palabra + "<br>"

    if(palabra == "holaa"){
        alert('Ganaste')
    }

})

input.addEventListener('click', () => {
    input.value = ''
    // mostrarResultado.innerHTML = '';
})