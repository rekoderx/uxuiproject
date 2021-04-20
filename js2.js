document.querySelector(".btn").addEventListener("click", move);

function move() {
    document.querySelector(".slider__inner").style.transform = "translateX(-25%)";
}

document.querySelector(".btn1").addEventListener("click", move1);

function move1() {
    document.querySelector(".slider__inner").style.transform = "translateX(-50%)";
}

document.querySelector(".btn2").addEventListener("click", move2);

function move2() {
    document.querySelector(".slider__inner").style.transform = "translateX(-75%)";
}

document.querySelector(".btn3").addEventListener("click", move3);

function move3() {
    document.querySelector(".slider__inner").style.transform = "translateX(-100%)";
}

document.querySelector(".skip_btn").addEventListener("click", skip);

function skip() {
    document.querySelector(".slider__inner").style.transform = "translateX(-100%)";
}
