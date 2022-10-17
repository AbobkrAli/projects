let logo = document.querySelector("header .container .logo>p");

setTimeout(function() {
    logo.style.color = "#e92f2f";
}, 3000)


let burger = document.querySelector(".burger");
let burger1 = document.querySelector(".span1");
let burger2 = document.querySelector(".span2");
let burger3 = document.querySelector(".span3")
let burgerStatus = "closed";
let links = document.querySelectorAll("header .social .social-links");
burger.addEventListener('click', () => {
    burger1.classList.toggle("span1D");
    burger2.classList.toggle("span2D");
    burger3.classList.toggle("span3D");

    links[0].classList.toggle("visible");
    links[1].classList.toggle("visible");
    links[2].classList.toggle("visible");

})
document.querySelector(".burger").onclick = function() {
    document.querySelector(".nav-ul").classList.toggle("ul-nav-collapse");
    document.querySelector(".nav-ul").classList.toggle("ul-nav-close");
    document.querySelector("main").classList.toggle("img-translate");
}

// img slider 
let cardSlider = document.querySelector(".about-team .team");
let slideCards = Array.from(document.querySelectorAll(".about-team .team .card"));
cardCounter = 0;

setInterval(function() {
    displayCardsNone();

    if (cardCounter == 7) {
        cardCounter = 1;
    } else {

        cardCounter++;
        slideCards[cardCounter].classList.remove("hidden-card");
        let size = slideCards[cardCounter].clientWidth;
        cardSlider.style.transform = `translateX(${-325*cardCounter}px)`;

    }
}, 5000)

setInterval(function() {
    if (cardCounter >= 0 && cardCounter < 2) {
        removeActiveLi()
        cardLi[0].classList.add("ul-active");
    } else if (cardCounter >= 2 && cardCounter < 5) {
        removeActiveLi()
        cardLi[1].classList.add("ul-active");
    } else if (cardCounter >= 5 && cardCounter < 8) {
        removeActiveLi()
        cardLi[2].classList.add("ul-active");
    }
}, 1000)

function displayCardsNone() {
    slideCards.forEach(element => {
        element.classList.add("hidden-card")
    });
}

let cardUl = document.querySelector(".about-team .container .cards-ul");
let cardLi = Array.from(document.querySelectorAll(".about-team .container .cards-ul .card-li "));

cardLi.forEach(function(element) {
    element.addEventListener('click', function() {
        removeActiveLi()
        element.classList.add("ul-active");
        cardCounter = element.getAttribute("data-num");
        cardSlider.style.transform = `translateX(${-325*cardCounter}px)`;
    })
})

function removeActiveLi() {
    cardLi.forEach(function(element) {
        element.classList.remove("ul-active")

    })
}
let fuckImg = document.querySelector("main img");
window.onload = function() {

    if (window.innerWidth <= 768 + "px") {
        fuckImg.style.display = "none";
    }
}

// #########
let carrds = Array.from(document.querySelectorAll(".about-team .team .card"));
let aboutTeamoff = document.querySelector(".about-team");
let aboutTeam = document.querySelector(".team");

//##########
let about = document.querySelector(".about");

//######################
let gallaryCard = document.querySelector(".gallary-cards");
let gallary = document.querySelector(".gallary");

window.onscroll = () => {
    if (scrollY >= gallary.offsetTop - 250) {
        gallaryCard.style.cssText = "margin-top: 100px; opacity: 1;";

    } else if (scrollY >= about.offsetTop - 250) {
        about.style.cssText = "transform:translateX(0); opacity: 1;";

    } else if (scrollY >= 1) {

        aboutTeam.classList.add("good");


    }
}