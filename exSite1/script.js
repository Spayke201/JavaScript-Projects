
function calcularHora () {
    var titulo = window.document.getElementById('titulo');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    console.log(typeof(minutos), minutos);
    titulo.innerHTML = `Agora são ${hora}:${minutos} horas.`;
    //dasdasdadasd
    //dasdasdsa
}