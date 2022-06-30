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

var slideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 700,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

ScrollReveal().reveal(".content-page",slideUp);


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








var options = {
    strings: ['teams.','startup.','business.'],
    typeSpeed: 50,
    // startDelay: 500,
    backSpeed : 40,
    loop : true

};

var typed = new Typed('.element', options);

console.log("hello page")


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

// let allInOne = document.getElementById("allInOne");
// let lessRoute = document.getElementById("lessRoute");
// let styleWork = document.getElementById("styleWork");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");

let spanOne = document.getElementById("spanOne");
let spanTwo = document.getElementById("spanTwo");
let spanThree = document.getElementById("spanThree");

let Clicks = document.querySelectorAll(".list-click");

Clicks.forEach(function (click){
   click.addEventListener("click",function (e){
       let prevent = e.preventDefault();
       // console.log(this.id)
       if(this.id === "allInOne"){
           console.log(this.id)
           img1.classList.remove("d-none")
           img1.classList.add("animate__fadeIn")
           img2.classList.add("d-none")
           img2.classList.remove("animate__fadeIn")
           img3.classList.add("d-none")
           img3.classList.remove("animate__fadeIn")
           span1.classList.add("list-active")
           span2.classList.remove("list-active")
           span3.classList.remove("list-active")
           span1.classList.add("animate__fadeIn")
           span2.classList.remove("animate__fadeIn")
           span3.classList.remove("animate__fadeIn")

       }
       else if(this.id === "allInOnetwo"){
           console.log("allInOnetwo")
           imgOne.classList.remove("d-none")
           imgOne.classList.add("animate__fadeIn")
           imgTwo.classList.add("d-none")
           imgTwo.classList.remove("animate__fadeIn")
           imgThree.classList.add("d-none")
           imgThree.classList.remove("animate__fadeIn")
           spanOne.classList.add("list-active")
           spanTwo.classList.remove("list-active")
           spanThree.classList.remove("list-active")
           spanOne.classList.add("animate__fadeIn")
           spanTwo.classList.remove("animate__fadeIn")
           spanThree.classList.remove("animate__fadeIn")

       }
       else if(this.id === "lessRoute"){
           console.log(this.id)
            img1.classList.add("d-none")
            img1.classList.remove("animate__fadeIn")
            img2.classList.remove("d-none")
            img2.classList.add("animate__fadeIn")
            img3.classList.add("d-none")
            img3.classList.remove("animate__fadeIn")
           span1.classList.remove("list-active")
           span2.classList.add("list-active")
           span3.classList.remove("list-active")
           span1.classList.remove("animate__fadeIn")
           span2.classList.add("animate__fadeIn")
           span3.classList.remove("animate__fadeIn")
       }
       else if(this.id === "lessRoutetwo"){
           console.log("lessRoutetwo")
           imgOne.classList.add("d-none")
           imgOne.classList.remove("animate__fadeIn")
           imgTwo.classList.remove("d-none")
           imgTwo.classList.add("animate__fadeIn")
           imgThree.classList.add("d-none")
           imgThree.classList.remove("animate__fadeIn")
           spanOne.classList.remove("list-active")
           spanTwo.classList.add("list-active")
           spanThree.classList.remove("list-active")
           spanOne.classList.remove("animate__fadeIn")
           spanTwo.classList.add("animate__fadeIn")
           spanThree.classList.remove("animate__fadeIn")
       }
       else if(this.id === "styleWorktwo"){
           console.log("styleWorktwo")
           imgOne.classList.add("d-none")
           imgOne.classList.remove("animate__fadeIn")
           imgTwo.classList.add("d-none")
           imgTwo.classList.remove("animate__fadeIn")
           imgThree.classList.remove("d-none")
           imgThree.classList.add("animate__fadeIn")
           spanOne.classList.remove("list-active")
           spanTwo.classList.remove("list-active")
           spanThree.classList.add("list-active")
           spanOne.classList.remove("animate__fadeIn")
           spanTwo.classList.remove("animate__fadeIn")
           spanThree.classList.add("animate__fadeIn")
       }
       else{
           console.log(this)
           img1.classList.add("d-none")
           img1.classList.remove("animate__fadeIn")
           img2.classList.add("d-none")
           img2.classList.remove("animate__fadeIn")
           img3.classList.remove("d-none")
           img3.classList.add("animate__fadeIn")
           span1.classList.remove("list-active")
           span2.classList.remove("list-active")
           span3.classList.add("list-active")
           span1.classList.remove("animate__fadeIn")
           span2.classList.remove("animate__fadeIn")
           span3.classList.add("animate__fadeIn")

       }

   })
})



