const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'JavaScript is a cool Programming Language!!!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

speedEl.addEventListener('input', e => speed = 300 / e.target.value);

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}
