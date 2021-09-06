var screen = document.querySelector(".screen");
var header = document.querySelector(".header");
var container = document.querySelector(".container");
var claculater = document.querySelector(".claculater");
var keys = document.querySelectorAll("button");
var screenValue = "";
var backspaceImg = document.getElementById('backspaceImg')
for (i of keys) {
    i.addEventListener('click', (e) => {
        var btntext = e.target.innerText;
        if (screenValue == "Syntax Error") {
            screenValue = "";
        }
        if (btntext == "=") {
            try {
                screenValue = eval(screen.innerText);
            } catch {
                screenValue = "Syntax Error"

            }
        } else if (btntext == 'AC') {

            screenValue = "";
        } else if (e.target.id == "backspace") {
            screenValue = screenValue.slice(0, -1);
        } else {
            screenValue += btntext
        }
        screen.innerText = screenValue;
    })
}
backspaceImg.addEventListener('click', () => {
    screenValue = screenValue.slice(0, -1);
    screen.innerText = screenValue;
})

var initialX, initialY, CurrentX, CurrentY;
var active = false;
var xOffset = 0;
var yOffset = 0;

window.addEventListener('mousedown', (e) => {

    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target == header) {
        active = true;
    }

}, false)
window.addEventListener('mousemove', (e) => {
    if (active) {

        e.preventDefault();
        CurrentX = e.clientX - initialX
        CurrentY = e.clientY - initialY
        xOffset = CurrentX;
        yOffset = CurrentY;
        container.style.top = CurrentY + 'px';
        container.style.left = CurrentX + 'px';

    }
}, false)
window.addEventListener('mouseup', (e) => {
    active = false;
    initialX = CurrentX;
    initialY = CurrentY;
}, false)