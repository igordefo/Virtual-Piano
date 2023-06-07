const keys = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"];
const keyboardKeys = document.querySelectorAll('kbd');
const audioPlay = (item) => {
    let audio = new Audio(`audio/${item}.mp3`);
    audio.play();
}

document.addEventListener('keypress', (e) => {
    let falseKey = true;

    function transform(kbd) {
        kbd.style.filter = "contrast(1)";
    }

    keys.forEach((elem) => {
        keyboardKeys.forEach((kbd) => {
            if (kbd.textContent === e.key) {
                kbd.style.filter = "contrast(0.5)";
                setTimeout(() => transform(kbd), 500);
            }
        });

        if (elem === e.key) {
            falseKey = false;
            audioPlay(e.key);
            return;
        }
    });

    if (falseKey) {
        console.warn("Wrong key. Press only A S D F G H J");
    }
});