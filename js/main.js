import '../style.scss'
import '../stylePage.scss'
import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";
import counterUp from 'counterup2';
import "waypoints/lib/noframework.waypoints.min";

import imgUrl from '../assets/automation.jpeg'
import imgUrlone from '../assets/automation-phone.jpeg'
import imgUrltwo from '../assets/problem.jpeg'
import imgUrlthree from '../assets/problem-phone.jpeg'






let phoneImg = document.getElementById("phoneImg");
let bigImg = document.getElementById("bigImg");
let cardOne = document.getElementById("cardOne");
let cardTwo = document.getElementById("cardTwo");
let cardThree = document.getElementById("cardThree");

let cardBtn = document.querySelectorAll(".card-hover-selection");

var options = {
    strings: ['teams.','startup.','business.'],
    typeSpeed: 50,
    // startDelay: 500,
    backSpeed : 40,
    loop : true

};

document.getElementById("workspace").style.display = "block";
document.getElementById("automation").style.display = "none";
document.getElementById("problem").style.display = "none";

var typed = new Typed('.element', options);
// var typed = new Typed('.pageElement', options);

document.getElementById("cardOne").addEventListener("click",function (){
    let work = document.getElementById("workspace");

    putImage(work,cardOne);
    removeClassfun(cardTwo,cardThree)
    document.getElementById("workspace").style.display = "block";
    document.getElementById("automation").style.display = "none";
    document.getElementById("problem").style.display = "none";


})

document.getElementById("cardTwo").addEventListener("click",function (){
    let auto = document.getElementById("automation");
    putImage(auto,cardTwo);
    removeClassfun(cardOne,cardThree)
    document.getElementById("workspace").style.display = "none";
    document.getElementById("automation").style.display = "block";
    document.getElementById("problem").style.display = "none";
})

document.getElementById("cardThree").addEventListener("click",function (){
    // putImage("problem-phone.220ef5e7.jpeg","problem.b9fb1875.jpeg",this);
    let problem = document.getElementById("problem");
    putImage(problem,cardThree)
    removeClassfun(cardOne,cardTwo);
    document.getElementById("workspace").style.display = "none";
    document.getElementById("automation").style.display = "none";
    document.getElementById("problem").style.display = "block";
})

function removeClassfun(classRemoveOne,classRemoveTwo){
    classRemoveOne.classList.remove("bg-card-selection")
    classRemoveTwo.classList.remove("bg-card-selection")
}

function putImage(classadd,cardNo){
    cardNo.classList.add("bg-card-selection");
    // phoneImg.src = `./assets/${phoneImgarg}`;
    // bigImg.src = `./assets/${bigImgarg}`;
    classadd.classList.add("animate__fadeIn");
    // phoneImg.classList.add("animate__fadeIn");
    setTimeout(function (){
        // cardNo.classList.remove("bg-card-selection");
        classadd.classList.remove("animate__fadeIn");
    },1000)
}

var slideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 700,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

ScrollReveal().reveal(".content",slideUp);

let el = document.querySelectorAll(".counter");

el.forEach(el=>{
    new Waypoint( {
        element: el,
        handler: function() {
            counterUp( el,{
                duration: 2000,
                delay: 16,
            } )
            this.destroy()
        },
        offset: 'bottom-in-view',
    } )

})

// let header = document.querySelector(".header");
let header = document.getElementById("header");

var waypoint = new Waypoint({
    element: document.getElementById('element-waypoint'),
    handler: function(direction) {
        if(direction === "down"){
            header.style.display = "block";
            header.classList.add("animate__fadeInUp");
            header.classList.remove("d-none");
            console.log(direction)
        }
        else if(direction === "up"){
            header.style.display = "none";
            header.classList.remove("animate__fadeInUp");
            console.log(direction)

        }
    }
    ,
    offset: '75%'
})

console.log("hello vite")

// const el = document.querySelector( '.counter' )
