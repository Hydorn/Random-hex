const btn = document.getElementById('btn');
const body = document.getElementById('body');
const span = document.getElementById('span');

    btn.addEventListener('click', cambiarColor);

function cambiarColor(event) {
    let hex = '#' + Math.random().toString(16).substring(2,8);
    body.style.backgroundColor= hex;
    span.innerHTML = hex;
    console.log(hex);

}
