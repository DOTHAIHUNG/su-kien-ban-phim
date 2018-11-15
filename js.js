function upArrowPress() {
    let element = document.getElementById("image");
    element.style.top = parseInt(element.style.top) - 10 + "px";
}

function downArrowPress() {
    let element = document.getElementById("image");
    element.style.top = parseInt(element.style.top) + 10 + "px";
}

function leftArrowPress() {
    let element = document.getElementById("image");
    element.style.left = parseInt(element.style.left) - 10 + "px";
}

function rightArrowPress() {
    let element = document.getElementById("image");
    element.style.left = parseInt(element.style.left) + 10 + "px";
}

function moveSelection(evt) {
    console.log(1);
    switch (evt.keyCode) {
        case 37:
            leftArrowPress();
            break;
        case 38:
            upArrowPress();
            break;
        case 39:
            rightArrowPress();
            break;
        case 40:
            downArrowPress();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

