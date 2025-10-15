const button = document.getElementById('fleeButton');
const message = document.getElementById('message');

const messages = [
    "Sem graça!",
    "Tá, você conseguiu!",
    "NEM TENTA DNV!",
    "ERROU KAKAKAK!"
];

function moveButton() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.style.color ="#000000" 
});

document.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const distanceX = e.clientX - (rect.left + rect.width/2);
    const distanceY = e.clientY - (rect.top + rect.height/2);
    const distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

    if(distance < 100) {
        moveButton();
    }
});