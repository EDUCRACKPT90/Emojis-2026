document.addEventListener("DOMContentLoaded", loadEmojis);



function loadEmojis() {
    // PASO 1: Crear la lista de opciones
    let allEmojis = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"];

    // PASO 2: Elegir una posición al azar
    let position = randomInteger(0, allEmojis.length - 1);

    // PASO 3: Buscar el elemento HTML y mostrar el emoji
    document.getElementById("emojis").innerHTML = allEmojis[position];
}

// https://github.com/cealonso/random
// ¿Por qué Abstracción?.La abstracción consiste en ocultar los detalles 
// de implementación complejos y mostrar únicamente la funcionalidad 
// (el "qué hace" sin importar el "cómo lo hace").
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
