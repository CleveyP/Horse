

function playSound(){
    let player = document.getElementById("horse-audio");
    player.play();
}

function playEndingSound(){
    let player = document.getElementById("horse-ending");
    player.play();
}

const changeBackground = () => {
    let randomColor1 = `rgb(${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)})`;
    let randomColor2 = `rgb(${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)})`;
    let randomColor3 = `rgb(${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)}, ${Math.ceil(Math.random() * 250)})`;
    document.body.style.backgroundImage = "linear-gradient("+randomColor1+", "+randomColor2+")";
    document.getElementById("you").style.color= randomColor3;
}

changeBackground();
const colorChanging = setInterval(changeBackground, 1200);
