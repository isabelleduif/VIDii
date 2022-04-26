// JavaScript Document

// code voor buttons (hulp van Rowin)

var scherm = document.querySelector(".scherm ol");
var buttonUp = document.querySelector(".up");
var buttonDown = document.querySelector(".down");

buttonUp.addEventListener("click", scrollUp);
buttonDown.addEventListener("click", scrollDown);

var scrollElement = 1;

var jaartallen = ["jaartal1", "jaartal2", "jaartal3"];
var jaartalFoto = document.querySelector(".jaartal1");

function scrollUp() {
    if (scrollElement == 1) {
        scrollElement = 1;
    } else {
        scrollElement -= 1;
    }

    document.querySelector(".scherm ol li:nth-of-type(" + scrollElement + ")").scrollIntoView();
    jaartalFoto.src = "../images/" + jaartallen[scrollElement - 1] + ".png";
}

function scrollDown() {
    if (scrollElement == 3) {
        scrollElement = 3;
    } else {
        scrollElement += 1;
    }

    document.querySelector(".scherm ol li:nth-of-type(" + scrollElement + ")").scrollIntoView();
    jaartalFoto.src = "../images/" + jaartallen[scrollElement - 1] + ".png";
}


// code voor info knop (hulp van Timo)

var infoButton = document.querySelector(".info");
var infoTekstvak = document.querySelector(".tekstvak");
var infoImage = document.querySelector(".info img");

infoButton.addEventListener("click", openInfo);

function openInfo(){
    infoTekstvak.classList.toggle("open");
    this.classList.toggle("open");

    if (infoButton.classList.contains("open")) {
        infoImage.src = "../images/kruisje.jpg";
    } else {
        infoImage.src = "../images/info.png";
    }
}


