const buttons = document.getElementsByClassName('xylo-button');
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', soundButtonDidTap);
}

function soundButtonDidTap(event) {
    let button = event.currentTarget; // текущая кнопка
    let soundName = button.getAttribute('data-sound'); // имя звука из атрибута 'data-sound'
    const audio = new Audio(`sounds/${soundName}.wav`);
    audio.play();
}
